import Navigation from "@/components/Navigation";
import ServerStats from "@/components/ServerStats";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Server = () => {
  const serverInfo = {
    version: "1.20.1",
    plugins: 15,
    worlds: 3,
    totalPlayers: 1247,
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Управление сервером
          </h1>
          <p className="text-gray-400">
            Мониторинг и управление игровым сервером
          </p>
        </div>

        <div className="mb-8">
          <ServerStats
            playersOnline={42}
            maxPlayers={100}
            uptime="5д 12ч"
            tps={19.8}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Icon name="Info" className="text-blue-400" size={20} />
              <span>Информация о сервере</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Версия Minecraft:</span>
                <span className="text-white font-medium">
                  {serverInfo.version}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Плагины:</span>
                <span className="text-white font-medium">
                  {serverInfo.plugins}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Миры:</span>
                <span className="text-white font-medium">
                  {serverInfo.worlds}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Всего игроков:</span>
                <span className="text-white font-medium">
                  {serverInfo.totalPlayers}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
              <Icon name="Settings" className="text-purple-400" size={20} />
              <span>Управление</span>
            </h3>
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 justify-start">
                <Icon name="Play" size={16} className="mr-2" />
                Перезапустить сервер
              </Button>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 justify-start">
                <Icon name="Pause" size={16} className="mr-2" />
                Остановить сервер
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
                <Icon name="RefreshCw" size={16} className="mr-2" />
                Перезагрузить плагины
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 justify-start">
                <Icon name="AlertTriangle" size={16} className="mr-2" />
                Экстренное отключение
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Icon name="Monitor" className="text-green-400" size={20} />
            <span>Производительность</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 rounded p-4">
              <div className="text-sm text-gray-400 mb-1">
                Использование RAM
              </div>
              <div className="text-2xl font-bold text-white">4.2GB / 8GB</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: "52%" }}
                ></div>
              </div>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <div className="text-sm text-gray-400 mb-1">Загрузка CPU</div>
              <div className="text-2xl font-bold text-white">23%</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: "23%" }}
                ></div>
              </div>
            </div>
            <div className="bg-slate-900 rounded p-4">
              <div className="text-sm text-gray-400 mb-1">
                Дисковое пространство
              </div>
              <div className="text-2xl font-bold text-white">45GB / 100GB</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-400 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Icon name="Terminal" className="text-purple-400" size={20} />
            <span>Консоль сервера</span>
          </h3>
          <div className="bg-black rounded p-4 font-mono text-sm">
            <div className="text-green-400">
              [12:34:56] [INFO] Server is running
            </div>
            <div className="text-blue-400">
              [12:35:01] [INFO] Player Steve123 joined the game
            </div>
            <div className="text-yellow-400">
              [12:35:15] [WARN] Plugin EssentialsX loaded successfully
            </div>
            <div className="text-red-400">
              [12:35:20] [ERROR] Could not connect to MySQL database
            </div>
            <div className="text-green-400">
              [12:35:25] [INFO] Backup completed successfully
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
