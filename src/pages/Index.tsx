import Navigation from "@/components/Navigation";
import ServerStats from "@/components/ServerStats";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Добро пожаловать на МСервер! 🎮
          </h1>
          <p className="text-gray-400">Лучший сервер для игры в Minecraft</p>
        </div>

        <div className="mb-8">
          <ServerStats
            playersOnline={42}
            maxPlayers={100}
            uptime="5д 12ч"
            tps={19.8}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="BookOpen" className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">
                Правила сервера
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Ознакомьтесь с правилами перед игрой
            </p>
            <a
              href="/rules"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Читать правила →
            </a>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Users" className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold text-white">
                Игроки онлайн
              </h3>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-2">42/100</div>
            <p className="text-gray-400">Посмотреть кто в игре</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Icon
                name="MessageSquare"
                className="text-yellow-400"
                size={24}
              />
              <h3 className="text-xl font-semibold text-white">
                Подать жалобу
              </h3>
            </div>
            <p className="text-gray-400 mb-4">Сообщите о нарушениях</p>
            <a
              href="/complaints"
              className="text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Подать жалобу →
            </a>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Icon name="Info" className="text-purple-400" size={20} />
            <span>Информация о сервере</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-medium mb-2">IP адрес:</h4>
              <p className="text-gray-300 bg-slate-900 p-2 rounded font-mono">
                play.mserver.ru
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2">Версия:</h4>
              <p className="text-gray-300">1.20.1 - 1.21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
