import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const rulesSections = [
    {
      title: "Общие правила",
      icon: "Shield",
      rules: [
        "Запрещено использование читов, модов и программ, дающих преимущество",
        "Уважайте других игроков и администрацию",
        "Запрещены оскорбления, мат и токсичное поведение",
        "Не распространяйте личную информацию других игроков",
      ],
    },
    {
      title: "Правила чата",
      icon: "MessageCircle",
      rules: [
        "Запрещен спам и флуд в чате",
        "Не используйте CAPS LOCK для привлечения внимания",
        "Запрещена реклама других серверов",
        "Общайтесь только на русском или английском языке",
      ],
    },
    {
      title: "Строительство",
      icon: "Hammer",
      rules: [
        "Запрещено строить неподалеку от чужих построек без разрешения",
        "Не загрязняйте ландшафт незавершенными постройками",
        "Запрещены постройки 18+ содержания",
        "Соблюдайте архитектурный стиль в городских зонах",
      ],
    },
    {
      title: "PvP правила",
      icon: "Swords",
      rules: [
        "PvP разрешено только в специальных зонах",
        "Запрещено убийство в безопасных зонах",
        "Не преследуйте новичков постоянными атаками",
        "Возвращайте вещи при случайном убийстве",
      ],
    },
    {
      title: "Экономика",
      icon: "Coins",
      rules: [
        "Запрещено создание монополий на ресурсы",
        "Честная торговля без обмана",
        "Не завышайте цены неоправданно",
        "Соблюдайте договоренности при сделках",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Icon name="BookOpen" className="text-purple-400" size={32} />
            Правила сервера
          </h1>
          <p className="text-gray-400">
            Соблюдение правил обязательно для всех игроков. Нарушение может
            привести к предупреждению, временному или постоянному бану.
          </p>
        </div>

        <div className="grid gap-6">
          {rulesSections.map((section, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border border-slate-700 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name={section.icon}
                  className="text-purple-400"
                  size={24}
                />
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.rules.map((rule, ruleIndex) => (
                  <li
                    key={ruleIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <Icon
                      name="Check"
                      className="text-green-400 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-red-900/20 border border-red-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Icon name="AlertTriangle" className="text-red-400" size={24} />
            <h2 className="text-xl font-semibold text-red-400">Важно!</h2>
          </div>
          <p className="text-gray-300">
            За серьезные нарушения правил предусмотрены следующие меры:
            предупреждение, мут, временный бан, постоянный бан. Администрация
            оставляет за собой право принимать решения в спорных ситуациях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
