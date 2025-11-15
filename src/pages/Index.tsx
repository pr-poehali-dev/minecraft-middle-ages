import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Icon from "@/components/ui/icon";

const DONATIONS = [
  { 
    id: 1, 
    name: "Рыцарь", 
    price: "20₽",
    color: "from-gray-600 to-gray-800",
    privileges: ["Специальная зелька"]
  },
  { 
    id: 2, 
    name: "Воин", 
    price: "50₽",
    color: "from-blue-600 to-blue-800",
    privileges: ["Все от Рыцаря", "Увеличенный инвентарь"]
  },
  { 
    id: 3, 
    name: "Лучник", 
    price: "100₽",
    color: "from-green-600 to-green-800",
    privileges: ["Все от Воина", "Особые стрелы"]
  },
  { 
    id: 4, 
    name: "Садник", 
    price: "150₽",
    color: "from-emerald-600 to-emerald-800",
    privileges: ["Все от Лучника", "Ускоренный рост растений"]
  },
  { 
    id: 5, 
    name: "Фермер", 
    price: "200₽",
    color: "from-amber-600 to-amber-800",
    privileges: ["Все от Садника", "Автоматическая ферма"]
  },
  { 
    id: 6, 
    name: "Солдат", 
    price: "220₽",
    color: "from-red-600 to-red-800",
    privileges: ["Все от Фермера", "Увеличенный урон"]
  },
  { 
    id: 7, 
    name: "Принц", 
    price: "999₽",
    color: "from-purple-600 to-purple-800",
    privileges: ["Все от Солдата", "Корона в игре", "Особые эффекты"]
  },
  { 
    id: 8, 
    name: "Король", 
    price: "1499₽",
    color: "from-yellow-500 to-yellow-700",
    privileges: ["Все от Принца", "Трон в спавне", "Королевская броня"]
  },
  { 
    id: 9, 
    name: "Повелитель", 
    price: "2499₽",
    color: "from-indigo-600 to-indigo-900",
    privileges: ["Все от Короля", "Особые команды", "Магические способности"]
  },
  { 
    id: 10, 
    name: "Бог", 
    price: "4999₽",
    color: "from-amber-400 via-yellow-500 to-amber-600",
    privileges: ["Все от Повелителя", "Бессмертие раз в час", "Божественная аура", "Уникальный титул"]
  }
];

const ADMINS = [
  { name: "MrAd", role: "Владелец", status: "online" },
  { name: "OsnAdmin", role: "Главный Администратор", status: "online" }
];

const Index = () => {
  const [copiedIP, setCopiedIP] = useState(false);
  const serverIP = "TheMiddleAgesCraft.aternos.me:58588";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopiedIP(true);
    toast.success("IP скопирован в буфер обмена!");
    setTimeout(() => setCopiedIP(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background bg-royal-pattern">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block p-8 bg-card/50 backdrop-blur-sm rounded-lg border-4 border-primary/40 shadow-2xl">
              <h1 className="text-7xl font-black text-primary text-shadow-gold mb-2">
                ⚔️ TheMiddleAgesCraft ⚔️
              </h1>
              <p className="text-2xl text-muted-foreground font-semibold">
                Королевство Средневековья
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-foreground/90">
                Окунись в эпоху рыцарей, замков и великих сражений!
                <br />Стань частью легендарного королевства!
              </p>
              
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/50 hover:border-primary transition-all">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">IP Сервера:</p>
                    <p className="text-2xl font-bold text-primary font-mono">{serverIP}</p>
                  </div>
                  <Button 
                    onClick={copyIP}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-yellow-600 hover:from-yellow-600 hover:to-primary text-background font-bold shadow-lg"
                  >
                    <Icon name={copiedIP ? "Check" : "Copy"} className="mr-2" size={20} />
                    {copiedIP ? "Скопировано!" : "Копировать IP"}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="py-20 border-b-4 border-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-black text-primary mb-4 text-shadow-gold">
              👑 Королевские Ранги 👑
            </h2>
            <p className="text-xl text-muted-foreground">
              Выбери свой путь к величию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DONATIONS.map((donation, index) => (
              <Card 
                key={donation.id}
                className="group overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${donation.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {donation.name}
                    </h3>
                    <Badge className={`bg-gradient-to-r ${donation.color} text-white border-0 px-3 py-1 text-sm font-bold`}>
                      {donation.price}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    {donation.privileges.map((privilege, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Crown" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{privilege}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-yellow-600 hover:from-yellow-600 hover:to-primary text-background font-bold"
                  >
                    Приобрести
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-black text-primary mb-4 text-shadow-gold">
              🛡️ Королевская Стража 🛡️
            </h2>
            <p className="text-xl text-muted-foreground">
              Команда администрации сервера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ADMINS.map((admin, index) => (
              <Card 
                key={index}
                className="bg-card/80 backdrop-blur-sm border-2 border-secondary/50 hover:border-secondary hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-secondary to-purple-800" />
                <div className="p-6 space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary to-purple-900 rounded-full flex items-center justify-center border-4 border-primary/30 group-hover:border-primary transition-all">
                    <Icon name="Shield" size={40} className="text-primary" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {admin.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-semibold">
                      {admin.role}
                    </p>
                    <Badge 
                      variant={admin.status === "online" ? "default" : "secondary"}
                      className={admin.status === "online" 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-gray-600 hover:bg-gray-700"
                      }
                    >
                      <div className={`w-2 h-2 rounded-full mr-2 ${admin.status === "online" ? "bg-green-300" : "bg-gray-300"}`} />
                      {admin.status === "online" ? "В сети" : "Не в сети"}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-primary/30 bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 TheMiddleAgesCraft. Все права защищены королевской печатью.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Присоединяйся к нашему королевству и стань частью истории!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;