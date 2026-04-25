import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A7FFF] via-[#6B5FFF] to-[#FF6B35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Готовы начать работу?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам команд, которые уже
            используют DoveChat для управления коммуникациями с
            клиентами
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="bg-white text-[#4A7FFF] hover:bg-gray-100 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg group hover:cursor-pointer w-full sm:w-auto shadow-lg"
            >
              Начать бесплатно
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF8C42] text-white border-2 border-white/20 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg group hover:cursor-pointer w-full sm:w-auto shadow-lg"
            >
              Связаться с нами
            </Button>
          </div>
          <p className="text-white/90 text-sm mt-6">
            Кредитная карта не требуется • Настройка за 5 минут
          </p>
        </div>
      </div>
    </section>
  );
}