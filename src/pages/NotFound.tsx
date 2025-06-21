import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <Icon
          name="Pickaxe"
          className="text-purple-400 mx-auto mb-4"
          size={64}
        />
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-4">Упс! Страница не найдена</p>
        <a href="/" className="text-purple-400 hover:text-purple-300 underline">
          Вернуться в админ-панель
        </a>
      </div>
    </div>
  );
};

export default NotFound;
