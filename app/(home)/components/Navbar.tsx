import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://github.com/Aly-Sall",
      label: "Github",
      icon: FaGithub,
    },
    {
      link: "https://www.linkedin.com/in/aly-sall-658332283/",
      label: "Linkedin",
      icon: FaLinkedin,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-blue-800 -rotate-3">
        Aly 👨🏽‍💻
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} arial-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
