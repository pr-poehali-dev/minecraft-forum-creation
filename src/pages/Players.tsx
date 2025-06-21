import { useState } from "react";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Players = () => {
  const [players] = useState([
    {
      id: 1,
      username: "Steve123",
      status: "online",
      playtime: "145ч 23м",
      lastSeen: "Сейчас",
      banned: false,
      warnings: 0,
    },
    {
      id: 2,
      username: "Alex456",
      status: "online",
      playtime: "89ч 12м",
      lastSeen: "Сейчас",
      banned: false,
      warnings: 1,
    },
    {
      id: 3,
      username: "Griefer999",
      status: "banned",
      playtime: "12ч 5м",
      lastSeen: "3 дня назад",
      banned: true,
      warnings: 3,
    },
    {
      id: 4,
      username: "BuilderPro",
      status: "offline",
      playtime: "234ч 56м",
      lastSeen: "2 часа назад",
      banned: false,
      warnings: 0,
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Игроки онлайн</h1>
          <p className="text-gray-400">Список игроков, которые сейчас в игре</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Users" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">42</div>
                <div className="text-green-100">Онлайн</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Clock" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">5д 12ч</div>
                <div className="text-blue-100">Аптайм</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Server" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">Онлайн</div>
                <div className="text-purple-100">Статус</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Zap" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">19.8</div>
                <div className="text-orange-100">TPS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg">
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <Icon name="Users" className="text-purple-400" size={20} />
              <span>Игроки в сети</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr>
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Игрок
                  </th>
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Статус
                  </th>
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Время в игре
                  </th>
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Последний раз
                  </th>
                </tr>
              </thead>
              <tbody>
                {players
                  .filter((p) => p.status === "online")
                  .map((player) => (
                    <tr
                      key={player.id}
                      className="border-b border-slate-700 hover:bg-slate-700/50"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                            <Icon
                              name="User"
                              className="text-white"
                              size={16}
                            />
                          </div>
                          <span className="text-white font-medium">
                            {player.username}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-green-400 font-medium">
                          В игре
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{player.playtime}</td>
                      <td className="p-4 text-gray-300">{player.lastSeen}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
