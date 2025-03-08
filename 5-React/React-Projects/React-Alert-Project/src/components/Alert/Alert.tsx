import "./Alert.css";
import { ReactNode } from "react";
import { ShieldCheck, ShieldAlert, ScrollText, ShieldX, BellRing } from "lucide-react"; // Ensure you install lucide-react

type AlertType = "success" | "danger" | "note" | "take-care" | "notification";

interface IProps {
  title: string;
  description: string;
  type: AlertType;
}

const iconMap: Record<IProps["type"], ReactNode> = {
  success: <ShieldCheck />,
  "take-care": <ShieldAlert />,
  note: <ScrollText />,
  danger: <ShieldX />,
  notification: <BellRing />,
};

const Alert = ({ title, description, type }: IProps) => {
  return (
    <div className={`alert ${type}`}>
      <div className="alert-header">
        {iconMap[type]} {/* Dynamically set the icon based on type */}
        <span className="alert-title">{title}</span>
      </div>
      <p className="alert-description">{description}</p>
    </div>
  );
};

export default Alert;
