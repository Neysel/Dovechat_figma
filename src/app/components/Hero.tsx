import { MessageCircle, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { notifications } from "../utils/notifications";
import exampleImage from "figma:asset/4893b917f1f81f4b059819acbe44b63e135f6d46.png";

export function Hero() {
  const handleStartFree = () => {
    notifications.success(
      "Добро пожаловать в DoveChat!",
      "Начните объединять все ваши мессенджеры в одном месте"
    );
  };

  const handleDemo = () => {
    notifications.info(
      "Демонстрация функций",
      "Откройте для себя все возможности DoveChat"
    );
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#4A7FFF] px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              Все мессенджеры в одном окне
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Управляйте всеми чатами из{" "}
              <span className="text-[#4A7FFF]">единого окна</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              DoveChat объединяет WhatsApp, Telegram, Instagram и другие мессенджеры
              в единый интерфейс для эффективной работы вашей команды
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-[#4A7FFF] hover:bg-[#3A6FEF] text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg hover:cursor-pointer w-full sm:w-auto"
                // onClick={handleStartFree}
              >
                Начать бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#4A7FFF] text-[#4A7FFF] hover:bg-[#4A7FFF] hover:text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg hover:cursor-pointer w-full sm:w-auto"
                // onClick={handleDemo}
              >
                Связаться с нами
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="w-5 h-5 text-[#4A7FFF]" />
                <span>Безопасность данных</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MessageCircle className="w-5 h-5 text-[#4A7FFF]" />
                <span>10+ мессенджеров</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={exampleImage}
                alt="DoveChat интерфейс"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4A7FFF]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
