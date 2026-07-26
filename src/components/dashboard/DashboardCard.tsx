import Card from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>

        <Icon size={22} className="text-gray-400" />
      </div>

      <h2 className="mt-4 text-3xl font-black">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {subtitle}
      </p>
    </Card>
  );
}