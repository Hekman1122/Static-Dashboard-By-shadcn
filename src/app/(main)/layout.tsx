import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block h-[calc(100vh-64px)] w-72">
          <SideBar />
        </div>
        <div className="w-full max-w-6xl p-5">{children}</div>
      </div>
    </>
  );
}
