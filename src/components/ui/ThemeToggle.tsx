import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  darkModes,
  setDark,
}: {
  darkModes: boolean;
  setDark: (val: boolean) => void;
}) {
  return (
    <button
      onClick={() => setDark(!darkModes)}
      className={`p-2 rounded-full transition-colors ${
        darkModes
          ? "bg-neutral-800 text-yellow-400 hover:bg-neutral-700"
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
      }`}
    >
      {darkModes ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
