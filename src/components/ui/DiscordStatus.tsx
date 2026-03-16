import { motion } from "framer-motion";
import { useLanyard } from "../../hooks/useLanyard";
import { cn } from "../../lib/utils";

export function DiscordStatus({ className }: { className?: string }) {
    const { data, loading } = useLanyard();

    if (loading) return null; // Or a skeleton

    const user = data?.discord_user;
    const status = data?.discord_status;
    const activity = data?.activities.find((a: any) => a.type === 0); // Playing game

    const statusColors = {
        online: "bg-green-500",
        idle: "bg-yellow-500",
        dnd: "bg-red-500",
        offline: "bg-gray-500",
    };

    const statusColor = status ? statusColors[status] : "bg-gray-500";
    const avatarUrl = user?.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        : "https://cdn.discordapp.com/embed/avatars/0.png";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn("glass p-4 rounded-xl flex items-center gap-4 max-w-sm w-full", className)}
        >
            <div className="relative">
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full border border-white/10"
                />
                <div className={cn("absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-black", statusColor)}></div>
            </div>

            <div className="flex flex-col">
                <span className="font-bold text-white flex items-center gap-2">
                    {user?.username}
                    <span className="text-xs font-normal text-gray-500">#{user?.discriminator}</span>
                </span>
                <div className="text-xs text-gray-400 truncate max-w-[200px]">
                    {activity ? (
                        <span className="text-primary truncate">Playing {activity.name}</span>
                    ) : (
                        <span>{status === 'dnd' ? 'Do Not Disturb' : (status ? status?.charAt(0).toUpperCase() + status?.slice(1) : 'Offline')}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
