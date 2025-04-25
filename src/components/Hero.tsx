import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-nsbank text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Финансы на вашей стороне с NS Bank
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Выгодные условия по кредитам, высокие ставки по вкладам и современный интернет-банк
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-nsbank hover:bg-gray-100">
                Открыть счёт
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm">
                Телефон горячей линии: <strong>+7 (980) 188 144 62-06</strong>
              </p>
              <p className="text-sm mt-1">
                Email: <strong>info@nsbank.ru</strong>
              </p>
              <p className="text-sm mt-2 flex items-center">
                <Send className="mr-1 h-4 w-4" />
                <a href="https://t.me/NS_Nikotos" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <strong>t.me/NS_Nikotos</strong>
                </a>
              </p>
              <p className="text-sm mt-3 opacity-80">
                Лицензия ЦБ РФ №529542 от 25.06.2021
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
              alt="NS Bank карты" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
