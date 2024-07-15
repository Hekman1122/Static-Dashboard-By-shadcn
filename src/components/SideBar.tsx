import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Folder,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
export default function SideBar() {
  return (
    <Command className="bg-secondary rounded-none px-2">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <Link href="/">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span className="font-semibold ml-3">Dashboard</span>
            </CommandItem>
          </Link>
          <Link href="/posts">
            <CommandItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <span className="font-semibold ml-3">Posts</span>
            </CommandItem>
          </Link>
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <span className="font-semibold ml-3">Categories</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
