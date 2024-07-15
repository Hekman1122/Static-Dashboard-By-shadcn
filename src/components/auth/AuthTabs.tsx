import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
export default function AuthTabs() {
  return (
    <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="w-full grid grid-cols-2 ">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="Register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}
