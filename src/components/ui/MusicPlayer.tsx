import { motion } from "framer-motion";
import { useLanyard } from "../../hooks/useLanyard";
import { cn } from "../../lib/utils";
import { Disc, Music } from "lucide-react";

export function MusicPlayer({ className }: { className?: string }) {
    const { data } = useLanyard();
    const spotify = data?.spotify;

    if (!data?.listening_to_spotify || !spotify) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.5, x: 0 }}
                className={cn("glass p-3 rounded-xl flex items-center gap-3 w-fit", className)}
            >
                <Disc className="animate-spin-slow w-5 h-5 text-gray-400" />
                <span className="text-xs text-gray-400">Not playing anything...</span>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("glass p-4 rounded-xl flex items-center gap-4 max-w-sm w-full", className)}
        >
            <div className="relative shrink-0">
                <img
                    src={spotify.album_art_url}
                    alt={spotify.album}
                    className="w-14 h-14 rounded-md border border-white/10"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#1DB954] rounded-full p-1 border border-black">
                    <Music size={10} className="text-black" />
                </div>
            </div>

            <div className="flex flex-col overflow-hidden">
                <span className="text-xs text-[#1DB954] font-bold uppercase tracking-wider mb-0.5">Listening to Spotify</span>
                <a
                    href={`https://open.spotify.com/track/${spotify.track_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white truncate hover:underline"
                >
                    {spotify.song}
                </a>
                <span className="text-xs text-gray-400 truncate">{spotify.artist}</span>
            </div>
        </motion.div>
    );
}
