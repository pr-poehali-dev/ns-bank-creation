import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-nsbank-dark via-nsbank to-nsbank-light text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Финансовые решения для вашего будущего
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              NS Bank предлагает выгодные условия кредитования, 
              высокие ставки по вкладам и удобный онлайн-банкинг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-nsbank hover:bg-opacity-90 text-base py-6 px-8">
                Открыть счёт
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nsbank text-base py-6 px-8">
                Подробнее <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl transform rotate-3 max-w-sm ml-auto">
              <div className="h-10 w-16 rounded-md bg-nsbank mb-4"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-8 w-full bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-200 rounded"></div>
                <div className="h-8 w-full bg-gray-200 rounded"></div>
              </div>
              <div className="mt-8 mb-2 h-6 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-nsbank rounded-md"></div>
            </div>
            <div className="absolute top-12 left-0 bg-white p-6 rounded-2xl shadow-xl transform -rotate-6 max-w-sm opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
