import { useState } from "react";
import Navigation from "@/components/Navigation";
import ComplaintCard from "@/components/ComplaintCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Complaints = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      playerName: "Steve123",
      targetPlayer: "Griefer999",
      reason: "Griefing",
      description:
        "Игрок сломал мой дом и украл все ресурсы. У меня есть скриншоты как доказательство. Это произошло сегодня утром около 9:00.",
      timestamp: "2 часа назад",
      status: "pending" as const,
    },
    {
      id: 2,
      playerName: "Alex456",
      targetPlayer: "SpamBot",
      reason: "Спам в чате",
      description:
        "Игрок постоянно спамит в чат рекламой других серверов и не реагирует на предупреждения.",
      timestamp: "4 часа назад",
      status: "pending" as const,
    },
    {
      id: 3,
      playerName: "CraftMaster",
      targetPlayer: "Cheater777",
      reason: "Читы",
      description:
        "Подозреваю игрока в использовании X-Ray. Очень быстро находит алмазы.",
      timestamp: "6 часов назад",
      status: "resolved" as const,
    },
  ]);

  const [filter, setFilter] = useState<
    "all" | "pending" | "resolved" | "rejected"
  >("all");

  const handleStatusChange = (
    id: number,
    newStatus: "resolved" | "rejected",
  ) => {
    setComplaints((prev) =>
      prev.map((complaint) =>
        complaint.id === id ? { ...complaint, status: newStatus } : complaint,
      ),
    );
  };

  const filteredComplaints = complaints.filter((complaint) => {
    if (filter === "all") return true;
    return complaint.status === filter;
  });

  const getFilterCount = (status: string) => {
    if (status === "all") return complaints.length;
    return complaints.filter((c) => c.status === status).length;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Жалобы игроков
            </h1>
            <p className="text-gray-400">Модерация и управление жалобами</p>
          </div>

          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Все ({getFilterCount("all")})
            </Button>
            <Button
              variant={filter === "pending" ? "default" : "outline"}
              onClick={() => setFilter("pending")}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              На рассмотрении ({getFilterCount("pending")})
            </Button>
            <Button
              variant={filter === "resolved" ? "default" : "outline"}
              onClick={() => setFilter("resolved")}
              className="bg-green-600 hover:bg-green-700"
            >
              Решенные ({getFilterCount("resolved")})
            </Button>
            <Button
              variant={filter === "rejected" ? "default" : "outline"}
              onClick={() => setFilter("rejected")}
              className="bg-red-600 hover:bg-red-700"
            >
              Отклоненные ({getFilterCount("rejected")})
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="Clock" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">
                  {getFilterCount("pending")}
                </div>
                <div className="text-yellow-100">На рассмотрении</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="CheckCircle" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">
                  {getFilterCount("resolved")}
                </div>
                <div className="text-green-100">Решено</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Icon name="XCircle" className="text-white" size={24} />
              <div>
                <div className="text-2xl font-bold text-white">
                  {getFilterCount("rejected")}
                </div>
                <div className="text-red-100">Отклонено</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredComplaints.length === 0 ? (
            <div className="text-center py-12">
              <Icon
                name="Inbox"
                className="text-gray-600 mx-auto mb-4"
                size={48}
              />
              <p className="text-gray-400">Нет жалоб для отображения</p>
            </div>
          ) : (
            filteredComplaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                {...complaint}
                onStatusChange={handleStatusChange}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Complaints;
