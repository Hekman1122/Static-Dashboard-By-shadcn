import { Card, CardContent } from "@/components/ui/card";

import { LucideIcon } from "lucide-react";
interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

export default function DashboardCard({
  title,
  count,
  icon,
}: DashboardCardProps) {
  return (
    <Card className="bg-neutral-100 dark:bg-neutral-800 p-4 pb-0 w-full">
      <CardContent>
        <h3 className="text-3xl font-bold text-center mb-4 text-neutral-500 dark:text-neutral-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-neutral-500 dark:text-neutral-200 font-semibold text-3xl">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
