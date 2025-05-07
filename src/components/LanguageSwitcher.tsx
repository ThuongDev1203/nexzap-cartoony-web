
import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLanguage);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-md bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
    >
      <span className="font-bold">{language.toUpperCase()}</span>
      <span className="text-xs">▼</span>
    </button>
  );
};

export default LanguageSwitcher;
