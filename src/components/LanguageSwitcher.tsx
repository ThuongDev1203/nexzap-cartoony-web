import React, { useState } from "react";
import { useLanguage, Language } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
      >
        <span className="font-bold">{language.toUpperCase()}</span>
        <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            onClick={() => handleSelect("en")}
            className={`w-full text-left px-3 py-1 text-sm hover:bg-orange-100 ${
              language === "en" ? "bg-orange-50 font-bold" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleSelect("vi")}
            className={`w-full text-left px-3 py-1 text-sm hover:bg-orange-100 ${
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
