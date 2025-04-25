import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { MobileMenu, User, Search, Menu, X } from "lucide-react";
import useMobile from "@/hooks/use-mobile";

const Header = () => {
  const { toast } = useToast();
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchClick = () => {
    toast({
      title: "Поиск",
      description: "Функция поиска в разработке",
    });
  };

  const handleLoginClick = () => {
    toast({
      title: "Вход в личный кабинет",
      description: "Функция входа в разработке",
    });
  };
  
  const mainMenuItems = [
    { title: "Карты", link: "/cards/debit" },
    { title: "Вклады", link: "/" },
    { title: "Кредиты", link: "/" },
    { title: "Ипотека", link: "/" },
    { title: "Инвестиции", link: "/" },
    { title: "Страхование", link: "/" },
    { title: "Бизнесу", link: "/" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-red-600">NS</span>
            <span className="font-medium text-xl text-gray-800">Bank</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              {mainMenuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="text-gray-700 hover:text-red-600 font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSearchClick}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLoginClick}
                  aria-label="Login"
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => navigate("/cards/debit")}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Открыть счёт
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {mainMenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={toggleMobileMenu}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button 
                onClick={() => {
                  handleLoginClick();
                  toggleMobileMenu();
                }}
                variant="outline"
                className="w-full justify-start"
              >
                <User className="h-5 w-5 mr-2" /> Войти
              </Button>
              <Button 
                onClick={() => {
                  navigate("/cards/debit");
                  toggleMobileMenu();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Открыть счёт
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
