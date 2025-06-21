import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Complaints = () => {
  const [formData, setFormData] = useState({
    playerName: "",
    targetPlayer: "",
    reason: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        playerName: "",
        targetPlayer: "",
        reason: "",
        description: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <div className="p-6 flex items-center justify-center min-h-[80vh]">
          <div className="bg-green-900/20 border border-green-700 rounded-lg p-8 text-center max-w-md">
            <Icon
              name="CheckCircle"
              className="text-green-400 mx-auto mb-4"
              size={48}
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              Жалоба отправлена!
            </h2>
            <p className="text-gray-300">
              Ваша жалоба была успешно отправлена администрации. Мы рассмотрим
              её в ближайшее время.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
            <Icon name="MessageSquare" className="text-yellow-400" size={32} />
            Подать жалобу
          </h1>
          <p className="text-gray-400">
            Сообщите о нарушениях правил сервера. Все жалобы рассматриваются
            администрацией.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-lg border border-slate-700 p-6"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Ваш никнейм *
              </label>
              <Input
                type="text"
                placeholder="Введите ваш игровой никнейм"
                value={formData.playerName}
                onChange={(e) =>
                  handleInputChange("playerName", e.target.value)
                }
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Никнейм нарушителя *
              </label>
              <Input
                type="text"
                placeholder="Никнейм игрока, на которого жалуетесь"
                value={formData.targetPlayer}
                onChange={(e) =>
                  handleInputChange("targetPlayer", e.target.value)
                }
                className="bg-slate-800 border-slate-600 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Причина жалобы *
              </label>
              <Select
                value={formData.reason}
                onValueChange={(value) => handleInputChange("reason", value)}
              >
                <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                  <SelectValue placeholder="Выберите причину" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="griefing">Гриферство</SelectItem>
                  <SelectItem value="chat_spam">Спам в чате</SelectItem>
                  <SelectItem value="cheats">Использование читов</SelectItem>
                  <SelectItem value="toxicity">Токсичное поведение</SelectItem>
                  <SelectItem value="stealing">Кража</SelectItem>
                  <SelectItem value="pvp_abuse">
                    Нарушение PvP правил
                  </SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Подробное описание *
              </label>
              <Textarea
                placeholder="Опишите подробно что произошло, когда и где. Приложите доказательства если есть."
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="bg-slate-800 border-slate-600 text-white min-h-[120px]"
                required
              />
            </div>

            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-blue-400 mt-0.5" size={20} />
                <div>
                  <h4 className="text-blue-400 font-medium mb-1">
                    Важно знать:
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Ложные жалобы могут повлечь наказание</li>
                    <li>• Прикладывайте скриншоты как доказательства</li>
                    <li>• Рассмотрение может занять до 24 часов</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
              disabled={
                !formData.playerName ||
                !formData.targetPlayer ||
                !formData.reason ||
                !formData.description
              }
            >
              <Icon name="Send" className="mr-2" size={16} />
              Отправить жалобу
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaints;
