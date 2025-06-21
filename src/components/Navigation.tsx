import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/rules", label: "Правила", icon: "BookOpen" },
    { path: "/players", label: "Онлайн", icon: "Users" },
    { path: "/complaints", label: "Подать жалобу", icon: "MessageSquare" },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Pickaxe" className="text-purple-400" size={28} />
          <h1 className="text-white text-xl font-bold">МСервер</h1>
        </div>

        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
