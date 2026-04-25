import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Старт",
    price: "0",
    period: "Бесплатно",
    description: "Для небольших команд",
    features: [
      "До 2 операторов",
      "3 канала",
      "1000 сообщений в месяц",
      "Базовая аналитика",
      "Мобильное приложение"
    ],
    highlighted: false,
    buttonText: "Начать бесплатно"
  },
  {
    name: "Команда",
    price: "2 990",
    period: "₽/мес",
    description: "Для растущих команд",
    features: [
      "До 10 операторов",
      "10 каналов",
      "Безлимитные сообщения",
      "Расширенная аналитика",
      "Автоматизация",
      "CRM интеграции",
      "Приоритетная поддержка"
    ],
    highlighted: true,
    buttonText: "Попробовать 14 дней"
  },
  {
    name: "Бизнес",
    price: "9 990",
    period: "₽/мес",
    description: "Для крупных компаний",
    features: [
      "Безлимитные операторы",
      "Безлимитные каналы",
      "Безлимитные сообщения",
      "Полная аналитика",
      "API доступ",
      "Персональный менеджер",
      "SLA гарантии",
      "Кастомизация"
    ],
    highlighted: false,
    buttonText: "Связаться с нами"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Тарифы для любого бизнеса
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Выберите план, который подходит именно вам. Без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-[#4A7FFF] shadow-xl scale-105 bg-gradient-to-b from-blue-50 to-white' 
                  : 'border-gray-200 hover:border-[#4A7FFF] hover:shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4A7FFF] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#4A7FFF]" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full hover:cursor-pointer ${
                  plan.highlighted 
                    ? 'bg-[#4A7FFF] hover:bg-[#3A6FEF] text-white' 
                    : 'bg-white border-2 border-[#4A7FFF] text-[#4A7FFF] hover:bg-[#4A7FFF] hover:text-white'
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
