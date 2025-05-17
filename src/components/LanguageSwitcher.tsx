
import React, { useState, useEffect, useRef } from "react";
import { useLanguage, Language } from "../context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span className="font-bold">{language === "vi" ? "Tiếng Việt" : "English"}</span>
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            onClick={() => handleSelect("en")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-100 ${
              language === "en" ? "bg-orange-50 font-bold" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleSelect("vi")}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-100 ${
              language === "vi" ? "bg-orange-50 font-bold" : ""
            }`}
          >
            Tiếng Việt
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
