import Icon from "@/components/ui/icon";

interface ServerStatsProps {
  playersOnline: number;
  maxPlayers: number;
  uptime: string;
  tps: number;
}

const ServerStats = ({
  playersOnline,
  maxPlayers,
  uptime,
  tps,
}: ServerStatsProps) => {
  const getTpsColor = (tps: number) => {
    if (tps >= 19) return "text-green-400";
    if (tps >= 15) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Users" className="text-blue-400" size={20} />
          <span className="text-gray-300 text-sm">Игроки онлайн</span>
        </div>
        <div className="text-2xl font-bold text-white">
          {playersOnline}/{maxPlayers}
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Clock" className="text-green-400" size={20} />
          <span className="text-gray-300 text-sm">Аптайм</span>
        </div>
        <div className="text-2xl font-bold text-white">{uptime}</div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Zap" className={getTpsColor(tps)} size={20} />
          <span className="text-gray-300 text-sm">TPS</span>
        </div>
        <div className={`text-2xl font-bold ${getTpsColor(tps)}`}>{tps}</div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Server" className="text-purple-400" size={20} />
          <span className="text-gray-300 text-sm">Статус</span>
        </div>
        <div className="text-2xl font-bold text-green-400">Онлайн</div>
      </div>
    </div>
  );
};

export default ServerStats;
