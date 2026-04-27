import { MessageCircle, Send, Instagram, Facebook, Mail, PhoneCall } from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: MessageCircle, color: "#25D366" },
  { name: "Telegram", icon: Send, color: "#0088cc" },
  { name: "Instagram", icon: Instagram, color: "#E4405F" },
  { name: "Facebook", icon: Facebook, color: "#1877F2" },
  { name: "Email", icon: Mail, color: "#EA4335" },
  { name: "VK", icon: MessageCircle, color: "#0077FF" },
  { name: "Viber", icon: PhoneCall, color: "#665CAC" },
  { name: "WeChat", icon: MessageCircle, color: "#09B83E" }
];

export function Integrations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Поддержка популярных мессенджеров и срм систем
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Подключайте все каналы коммуникации и работайте из одного окна
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#4A7FFF] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${integration.color}15` }}
              >
                <integration.icon 
                  className="w-8 h-8" 
                  style={{ color: integration.color }}
                />
              </div>
              <span className="text-gray-900 font-medium">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
