import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface ComplaintCardProps {
  id: number;
  playerName: string;
  targetPlayer: string;
  reason: string;
  description: string;
  timestamp: string;
  status: "pending" | "resolved" | "rejected";
  onStatusChange: (id: number, status: "resolved" | "rejected") => void;
}

const ComplaintCard = ({
  id,
  playerName,
  targetPlayer,
  reason,
  description,
  timestamp,
  status,
  onStatusChange,
}: ComplaintCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-600";
      case "resolved":
        return "bg-green-600";
      case "rejected":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "На рассмотрении";
      case "resolved":
        return "Решена";
      case "rejected":
        return "Отклонена";
      default:
        return "Неизвестно";
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <Icon name="User" className="text-purple-400" size={20} />
          <span className="text-white font-medium">{playerName}</span>
          <Icon name="ArrowRight" className="text-gray-400" size={16} />
          <span className="text-red-400 font-medium">{targetPlayer}</span>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(status)}`}
        >
          {getStatusText(status)}
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-2">
        <Icon name="AlertCircle" className="text-orange-400" size={16} />
        <span className="text-gray-300">{reason}</span>
      </div>

      <div className="text-sm text-gray-400 mb-3">{timestamp}</div>

      {isExpanded && (
        <div className="bg-slate-900 rounded p-3 mb-3">
          <p className="text-gray-300">{description}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-400 hover:text-purple-300"
        >
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          {isExpanded ? "Скрыть" : "Подробнее"}
        </Button>

        {status === "pending" && (
          <div className="flex space-x-2">
            <Button
              size="sm"
              onClick={() => onStatusChange(id, "resolved")}
              className="bg-green-600 hover:bg-green-700"
            >
              <Icon name="Check" size={16} />
              Решить
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onStatusChange(id, "rejected")}
            >
              <Icon name="X" size={16} />
              Отклонить
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintCard;
