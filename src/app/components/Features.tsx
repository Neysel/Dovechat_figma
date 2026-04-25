import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  Sparkles,
  Globe
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Единый интерфейс",
    description: "Все ваши чаты из разных мессенджеров в одном окне. Больше не нужно переключаться между приложениями"
  },
  {
    icon: Users,
    title: "Командная работа",
    description: "Назначайте чаты операторам, отслеживайте нагрузку и повышайте эффективность команды"
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчеты",
    description: "Подробная статистика по всем диалогам, времени ответа и качеству обслуживания клиентов"
  },
  {
    icon: Zap,
    title: "Автоматизация",
    description: "Настраивайте автоответы, шаблоны сообщений и сценарии для быстрой работы с клиентами"
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Шифрование данных, двухфакторная аутентификация и контроль доступа для вашей команды"
  },
  {
    icon: Clock,
    title: "История сообщений",
    description: "Полная история переписки со всеми клиентами, удобный поиск и фильтрация диалогов"
  },
  {
    icon: Sparkles,
    title: "Умные теги",
    description: "Организуйте чаты с помощью тегов, меток и категорий для быстрого поиска нужных диалогов"
  },
  {
    icon: Globe,
    title: "Мультиязычность",
    description: "Поддержка более 30 языков и автоматический перевод сообщений для международных команд"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Все для эффективной работы
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            DoveChat предоставляет полный набор инструментов для управления
            коммуникациями с клиентами
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-[#4A7FFF] hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#4A7FFF] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#4A7FFF] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
