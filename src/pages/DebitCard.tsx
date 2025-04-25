import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Shield, Zap, Gift, ArrowRight } from "lucide-react";

const DebitCard = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Дебетовая карта NS Black</h1>
                <p className="text-xl mb-8">Бесплатное обслуживание и до 7% кэшбэк на все покупки</p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-2">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span>Бесплатное обслуживание</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-2">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>Защита от мошенников</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-2">
                      <Zap className="h-5 w-5" />
                    </div>
                    <span>Мгновенный выпуск</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white/20 p-2">
                      <Gift className="h-5 w-5" />
                    </div>
                    <span>Кэшбэк до 7%</span>
                  </div>
                </div>
                <Button 
                  className="bg-white text-red-600 hover:bg-white/90 hover:text-red-700 text-lg py-6 px-8"
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оформить карту
                </Button>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80" 
                  alt="NS Bank Card" 
                  className="w-3/4 rounded-lg shadow-2xl transform rotate-6"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Card Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества карты NS Black</h2>
            
            <Tabs defaultValue="cashback" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="cashback">Кэшбэк</TabsTrigger>
                <TabsTrigger value="service">Обслуживание</TabsTrigger>
                <TabsTrigger value="app">Мобильный банк</TabsTrigger>
                <TabsTrigger value="security">Безопасность</TabsTrigger>
              </TabsList>
              <TabsContent value="cashback" className="p-6 border rounded-b-md">
                <h3 className="text-2xl font-bold mb-4">Кэшбэк до 7% на все покупки</h3>
                <p className="mb-4">Получайте вознаграждение за каждую покупку по карте NS Black:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7% на любимые категории (выбирайте сами)</li>
                  <li>5% в кафе и ресторанах</li>
                  <li>3% на такси и транспорт</li>
                  <li>1% на все остальные покупки</li>
                </ul>
              </TabsContent>
              <TabsContent value="service" className="p-6 border rounded-b-md">
                <h3 className="text-2xl font-bold mb-4">Бесплатное обслуживание</h3>
                <p className="mb-4">Карта NS Black обслуживается бесплатно при соблюдении одного из условий:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Остаток от 10 000 ₽ на счетах</li>
                  <li>Покупки от 5 000 ₽ в месяц</li>
                  <li>Зарплатный проект</li>
                </ul>
              </TabsContent>
              <TabsContent value="app" className="p-6 border rounded-b-md">
                <h3 className="text-2xl font-bold mb-4">Мобильный банк NS</h3>
                <p className="mb-4">Управляйте своими финансами с помощью удобного приложения:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Мгновенные уведомления о транзакциях</li>
                  <li>Блокировка карты в один клик</li>
                  <li>Анализ расходов и доходов</li>
                  <li>Круглосуточная поддержка в чате</li>
                </ul>
              </TabsContent>
              <TabsContent value="security" className="p-6 border rounded-b-md">
                <h3 className="text-2xl font-bold mb-4">Безопасность на высшем уровне</h3>
                <p className="mb-4">Ваши деньги под надежной защитой:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>3D Secure для онлайн-покупок</li>
                  <li>Биометрическая аутентификация</li>
                  <li>Система мониторинга подозрительных операций</li>
                  <li>СМС-подтверждение операций</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {formStep === 1 ? (
                <>
                  <h2 className="text-3xl font-bold text-center mb-8">Оформить карту NS Black</h2>
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="fullName">ФИО</Label>
                            <Input id="fullName" placeholder="Иванов Иван Иванович" required />
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Мобильный телефон</Label>
                            <Input id="phone" placeholder="+7 (___) ___ __ __" required />
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Электронная почта</Label>
                            <Input id="email" type="email" placeholder="example@mail.ru" required />
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox id="agreement" required />
                            <Label htmlFor="agreement" className="text-sm">
                              Я согласен на обработку персональных данных и с условиями договора
                            </Label>
                          </div>
                        </div>
                        
                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                          Оформить карту
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Заявка успешно отправлена!</h2>
                  <p className="text-lg mb-8">
                    Мы получили вашу заявку на оформление карты NS Black. Наш менеджер свяжется с вами в ближайшее время для подтверждения деталей.
                  </p>
                  <Button onClick={() => navigate("/")} className="bg-red-600 hover:bg-red-700">
                    Вернуться на главную
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DebitCard;
