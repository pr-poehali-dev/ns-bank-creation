import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Percent, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      title: "Дебетовые карты",
      description: "Бесплатное обслуживание и кэшбэк до 7% на все покупки",
      icon: <CreditCard className="h-8 w-8 text-red-600" />,
      cta: "Оформить карту",
      link: "/cards/debit"
    },
    {
      title: "Кредиты наличными",
      description: "Ставка от 5.9% годовых и быстрое одобрение за 2 минуты",
      icon: <DollarSign className="h-8 w-8 text-red-600" />,
      cta: "Рассчитать кредит",
      link: "/"
    },
    {
      title: "Вклады и счета",
      description: "Вклады до 8% годовых с ежемесячной выплатой процентов",
      icon: <Percent className="h-8 w-8 text-red-600" />,
      cta: "Открыть вклад",
      link: "/"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Популярные продукты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-none shadow-md h-full flex flex-col">
              <CardHeader>
                <div className="mb-4">{product.icon}</div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => navigate(product.link)}
                >
                  {product.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Building className="h-12 w-12 text-red-600" />
              <div>
                <h3 className="text-2xl font-bold">NS Bank для бизнеса</h3>
                <p className="text-gray-600">Расчетный счет, кредитование и эквайринг для вашего бизнеса</p>
              </div>
            </div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap"
              onClick={() => navigate("/")}
            >
              Открыть счет бизнесу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
