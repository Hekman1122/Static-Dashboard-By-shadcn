import { ArrowLeftCircle } from "lucide-react";
export interface BackButtonProps {
  text: string;
  link: string;
}
import Link from "next/link";
export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <>
      <Link
        href={link}
        className="flex items-center gap-2 text-neutral-500 font-bold mb-5 hover:underline"
      >
        <ArrowLeftCircle className="h-6 w-6" />
        <span className="ml-2">{text}</span>
      </Link>
    </>
  );
}
