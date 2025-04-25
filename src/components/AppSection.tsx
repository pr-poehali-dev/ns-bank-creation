import { Button } from "@/components/ui/button";
import { PhoneIcon, TabletSmartphone, Check } from "lucide-react";

const AppSection = () => {
  const features = [
    "Переводы 24/7 без комиссии",
    "Оплата услуг и штрафов",
    "Контроль расходов и аналитика",
    "Быстрый вход по Face ID"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-64 h-[500px] mx-auto bg-nsbank-text rounded-[40px] p-3 shadow-xl relative z-10">
                <div className="h-full w-full bg-white rounded-[32px] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-nsbank to-nsbank-dark flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="h-10 w-16 rounded-md bg-white mx-auto mb-4">
                        <div className="h-full w-full flex items-center justify-center">
                          <span className="text-nsbank font-bold text-sm">NS</span>
                        </div>
                      </div>
                      <p className="font-bold">NS Bank App</p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-20 h-3 bg-nsbank-text rounded-b-xl top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[640px] border-4 border-nsbank-light opacity-20 rounded-[48px] -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Управляйте финансами с мобильным приложением</h2>
            <p className="text-nsbank-text mb-8">
              Совершайте платежи, управляйте картами и контролируйте расходы в любое время с удобным приложением NS Bank.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-nsbank-light bg-opacity-20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-nsbank" />
                  </span>
                  <span className="text-nsbank-text">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="nsbank-button flex items-center gap-2">
                <PhoneIcon size={18} />
                App Store
              </Button>
              <Button className="nsbank-button flex items-center gap-2">
                <TabletSmartphone size={18} />
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
