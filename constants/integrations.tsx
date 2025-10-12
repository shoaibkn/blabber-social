import { InstagramIcon, MessageCircleIcon } from "lucide-react";
import { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM" | "WHATSAPP";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "Lorem Ipsum Doler Salamat",
    icon: <InstagramIcon width={48} height={48} />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Whatsapp",
    description: "Lorem Ipsum Doler Salamat",
    icon: <MessageCircleIcon width={48} height={48} />,
    strategy: "CRM",
  },
];
