import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-nsbank flex items-center justify-center">
              <span className="text-white font-bold">NS</span>
            </div>
            <span className="text-nsbank font-bold text-xl">NS Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-nsbank-text hover:text-nsbank gap-1">
                Частным клиентам <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Карты</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Кредиты</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Вклады</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-nsbank-text hover:text-nsbank gap-1">
                Бизнесу <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Расчетный счет</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Кредитование</Link>
                <Link to="/" className="block px-4 py-2 hover:bg-nsbank-gray rounded-md">Эквайринг</Link>
              </div>
            </div>
            <Link to="/" className="text-nsbank-text hover:text-nsbank">О банке</Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-nsbank text-nsbank hover:bg-nsbank hover:text-white">
              <User size={16} />
              Войти
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-nsbank-text py-2 border-b border-gray-100">Частным клиентам</Link>
              <Link to="/" className="text-nsbank-text py-2 border-b border-gray-100">Бизнесу</Link>
              <Link to="/" className="text-nsbank-text py-2 border-b border-gray-100">О банке</Link>
              <Button className="bg-nsbank hover:bg-nsbank-light mt-2">
                <User size={16} />
                Войти
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
