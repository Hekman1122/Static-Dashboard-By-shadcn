import PostsTable from "@/components/posts/PostsTable";
import DashboardCard from "@/components/dashboard/DashboardCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-3">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-neutral-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={18}
          icon={<Folder className="text-neutral-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-neutral-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-neutral-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </main>
  );
}
