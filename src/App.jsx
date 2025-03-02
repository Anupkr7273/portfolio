import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const { theme, toggleTheme } = useTheme(); // Ensure toggleTheme is correctly received

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">Dark Mode Toggle</h1>
      <button
        onClick={toggleTheme} // This should work now
        className="mt-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 flex items-center space-x-2"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </div>
  );
}
