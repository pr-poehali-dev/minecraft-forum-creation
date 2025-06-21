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
            Панель администратора
          </h1>
          <p className="text-gray-400">Управление сервером и модерация жалоб</p>
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
              <Icon
                name="AlertTriangle"
                className="text-yellow-400"
                size={24}
              />
              <h3 className="text-xl font-semibold text-white">Новые жалобы</h3>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">7</div>
            <p className="text-gray-400">Требуют рассмотрения</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Shield" className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold text-white">
                Решено сегодня
              </h3>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-2">12</div>
            <p className="text-gray-400">Жалоб обработано</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Ban" className="text-red-400" size={24} />
              <h3 className="text-xl font-semibold text-white">
                Активные баны
              </h3>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-2">3</div>
            <p className="text-gray-400">Заблокированных игроков</p>
          </div>
        </div>

        <div className="mt-8 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Icon name="Activity" className="text-purple-400" size={20} />
            <span>Последние действия</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded">
              <Icon name="UserCheck" className="text-green-400" size={16} />
              <span className="text-gray-300">
                Игрок <span className="text-white font-medium">Steve123</span>{" "}
                разбанен
              </span>
              <span className="text-gray-500 text-sm ml-auto">5 мин назад</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded">
              <Icon
                name="AlertTriangle"
                className="text-yellow-400"
                size={16}
              />
              <span className="text-gray-300">
                Новая жалоба от{" "}
                <span className="text-white font-medium">Alex456</span>
              </span>
              <span className="text-gray-500 text-sm ml-auto">
                12 мин назад
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded">
              <Icon name="UserX" className="text-red-400" size={16} />
              <span className="text-gray-300">
                Игрок <span className="text-white font-medium">Griefer999</span>{" "}
                забанен за griefing
              </span>
              <span className="text-gray-500 text-sm ml-auto">1 час назад</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
