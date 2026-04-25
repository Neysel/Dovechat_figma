import { useState } from "react";
import { MessageSquare, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoMainImage from "../../assets/logo_main.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-19">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center ml-4">
              <img src={logoMainImage} alt="DoveChat Logo" className="w-auto h-[68px]" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#4A7FFF] transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#4A7FFF] transition-colors">
              Тарифы
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#4A7FFF] transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#4A7FFF] transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-gray-700 hover:text-[#4A7FFF] hover:bg-[#4A7FFF]/10 hover:cursor-pointer h-10 px-6"
            >
              Вход
            </Button>
            <Button className="hidden md:inline-flex bg-[#4A7FFF] hover:bg-[#3A6FEF] text-white hover:cursor-pointer h-10 px-6">
              Попробовать бесплатно
            </Button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Меню"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#features"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-[#4A7FFF] hover:bg-blue-50 rounded-lg transition-colors"
            >
              Возможности
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-[#4A7FFF] hover:bg-blue-50 rounded-lg transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-[#4A7FFF] hover:bg-blue-50 rounded-lg transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 hover:text-[#4A7FFF] hover:bg-blue-50 rounded-lg transition-colors"
            >
              Контакты
            </a>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-center text-gray-700 hover:text-[#4A7FFF] hover:bg-[#4A7FFF]/10 h-12"
                onClick={closeMenu}
              >
                Вход
              </Button>
              <Button
                className="w-full justify-center bg-[#4A7FFF] hover:bg-[#3A6FEF] text-white h-12"
                onClick={closeMenu}
              >
                Попробовать бесплатно
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
