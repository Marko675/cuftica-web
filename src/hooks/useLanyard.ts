import { useEffect, useState } from "react";
import { DISCORD_ID } from "../lib/constants";

export interface LanyardData {
    spotify: {
        track_id: string;
        timestamps: {
            start: number;
            end: number;
        };
        song: string;
        artist: string;
        album_art_url: string;
        album: string;
    } | null;
    listening_to_spotify: boolean;
    discord_user: {
        username: string;
        public_flags: number;
        id: string;
        discriminator: string;
        avatar: string;
    };
    discord_status: "online" | "idle" | "dnd" | "offline";
    activities: {
        type: number;
        state: string;
        name: string;
        id: string;
        emoji?: {
            name: string;
            id: string;
            animated: boolean;
        };
        created_at: number;
        timestamps?: {
            start: number;
            end?: number;
        };
        details?: string;
        assets?: {
            large_text?: string;
            large_image?: string;
            small_text?: string;
            small_image?: string;
        };
    }[];
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
}

export function useLanyard() {
    const [data, setData] = useState<LanyardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let socket: WebSocket;
        let heartbeatInterval: ReturnType<typeof setInterval>;

        const connect = () => {
            socket = new WebSocket("wss://api.lanyard.rest/socket");

            socket.onopen = () => {
                // console.log("Lanyard WebSocket Connected");
            };

            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                const { op, t, d } = message;

                // Hello opcode
                if (op === 1) {
                    const { heartbeat_interval } = d;
                    // Send initialize opcode
                    socket.send(
                        JSON.stringify({
                            op: 2,
                            d: {
                                subscribe_to_id: DISCORD_ID,
                            },
                        })
                    );

                    // Start heartbeat
                    heartbeatInterval = setInterval(() => {
                        socket.send(JSON.stringify({ op: 3 }));
                    }, heartbeat_interval);
                }

                // Event dispatch
                if (op === 0) {
                    if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
                        setData(d);
                        setLoading(false);
                    }
                }
            };

            socket.onclose = () => {
                clearInterval(heartbeatInterval);
                // Reconnect after 5s
                setTimeout(connect, 5000);
            };
        };

        connect();

        return () => {
            if (socket) socket.close();
            clearInterval(heartbeatInterval);
        };
    }, []);

    return { data, loading };
}
