import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nsbank-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-nsbank font-bold">NS</span>
              </div>
              <span className="text-white font-bold text-xl">NS Bank</span>
            </div>
            <p className="text-gray-300 mb-6">
              Лицензия ЦБ РФ №529542 от 25.06.2021
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="https://t.me/NS_Nikotos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Частным клиентам</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Карты</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Кредиты</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Вклады и счета</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Страхование</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Инвестиции</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Бизнесу</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Расчетный счет</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Кредитование</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Эквайринг</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Зарплатный проект</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">ВЭД</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-nsbank mt-1 flex-shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Банковская, д. 123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-nsbank flex-shrink-0" />
                <span className="text-gray-300">+7 (980) 188 144 62-06</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-nsbank flex-shrink-0" />
                <span className="text-gray-300">info@nsbank.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Send size={18} className="text-nsbank flex-shrink-0" />
                <a href="https://t.me/NS_Nikotos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">t.me/NS_Nikotos</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 NS Bank. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
