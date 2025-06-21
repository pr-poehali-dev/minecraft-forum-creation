import { useState } from "react";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-400";
      case "offline":
        return "text-gray-400";
      case "banned":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "В игре";
      case "offline":
        return "Не в сети";
      case "banned":
        return "Заблокирован";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Управление игроками
          </h1>
          <p className="text-gray-400">
            Мониторинг и модерация игроков сервера
          </p>
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
              <Icon name="UserCheck" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">1247</div>
                <div className="text-blue-100">Всего игроков</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="UserX" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-red-100">Заблокированы</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="AlertTriangle" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">7</div>
                <div className="text-yellow-100">Предупреждений</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg">
          <div className="p-6 border-b border-slate-700">
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <Icon name="Search" className="text-purple-400" size={20} />
              <span>Список игроков</span>
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
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Предупреждения
                  </th>
                  <th className="text-left p-4 text-gray-300 font-medium">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr
                    key={player.id}
                    className="border-b border-slate-700 hover:bg-slate-700/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                          <Icon name="User" className="text-white" size={16} />
                        </div>
                        <span className="text-white font-medium">
                          {player.username}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`font-medium ${getStatusColor(player.status)}`}
                      >
                        {getStatusText(player.status)}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{player.playtime}</td>
                    <td className="p-4 text-gray-300">{player.lastSeen}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          player.warnings === 0
                            ? "bg-green-900 text-green-300"
                            : player.warnings <= 2
                              ? "bg-yellow-900 text-yellow-300"
                              : "bg-red-900 text-red-300"
                        }`}
                      >
                        {player.warnings}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        {!player.banned ? (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black"
                            >
                              <Icon name="AlertTriangle" size={14} />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                            >
                              <Icon name="Ban" size={14} />
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
                          >
                            <Icon name="UserCheck" size={14} />
                          </Button>
                        )}
                      </div>
                    </td>
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
