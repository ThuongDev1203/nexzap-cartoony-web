
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/22e03598-70f9-4cb7-aedb-3d83e750208c.png"
              alt="NexZap Studio Logo"
              className="h-10"
            />
            <span className="text-2xl font-bold text-orange-500">
              NexZap <span className="text-gray-800">Studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
                {t("nav.home")}
              </Link>
              <Link to="/games" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
                {t("nav.games")}
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
                {t("nav.about")}
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
                {t("nav.contact")}
              </Link>
              <LanguageSwitcher />
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link 
                to="/games" 
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.games")}
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
