
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { Gamepad, Code, Star, Rocket, Trophy } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const gamePlaceholders = [
  {
    id: 1,
    title: "Cosmic Adventure",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "An exciting space exploration game with vibrant cartoon graphics."
  },
  {
    id: 2,
    title: "Monster Legends",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Collect and battle with cute cartoon monsters in this fantasy world."
  },
  {
    id: 3,
    title: "Puzzle Kingdom",
    image: "https://images.unsplash.com/photo-1614465000772-1b302f406c49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Solve colorful puzzles in this brain-teasing adventure."
  },
];

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi43NjMgMC01IDIuMjM5LTUgNXMyLjIzNyA1IDUgNSA1LTIuMjM5IDUtNS0yLjIzNy01LTUtNXpNMTUgMzBjLTIuNzYzIDAtNSAyLjIzOS01IDVzMi4yMzcgNSA1IDUgNS0yLjIzOSA1LTUtMi4yMzctNS01LTV6IiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9Ii4yIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              NexZap Studio
            </h1>
            <p className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("hero.slogan")}
            </p>
            <p className="text-xl md:text-2xl opacity-90 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {t("hero.subtitle")}
            </p>
            <Button className="bg-white text-orange-600 hover:bg-orange-100 px-8 py-6 text-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {t("hero.cta")}
            </Button>
          </div>

          {/* Floating game icons animation */}
          <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2">
            <div className="relative w-64 h-64">
              <div className="absolute top-0 left-0 p-4 bg-white rounded-2xl shadow-xl transform rotate-6 hover-scale animate-float">
                <Gamepad size={40} className="text-orange-500" />
              </div>
              <div className="absolute top-20 right-0 p-4 bg-white rounded-2xl shadow-xl transform -rotate-12 hover-scale animate-float" style={{ animationDelay: "1s" }}>
                <Trophy size={40} className="text-orange-500" />
              </div>
              <div className="absolute bottom-0 left-10 p-4 bg-white rounded-2xl shadow-xl transform rotate-12 hover-scale animate-float" style={{ animationDelay: "2s" }}>
                <Star size={40} className="text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("about.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500 text-white p-3 rounded-xl inline-block mb-4">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t("features.creativity.title")}
              </h3>
              <p className="text-gray-600">
                {t("features.creativity.desc")}
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500 text-white p-3 rounded-xl inline-block mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t("features.tech.title")}
              </h3>
              <p className="text-gray-600">
                {t("features.tech.desc")}
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500 text-white p-3 rounded-xl inline-block mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t("features.fun.title")}
              </h3>
              <p className="text-gray-600">
                {t("features.fun.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {t("games.title")}
            </h2>
            <Link to="/games" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
              {t("games.viewAll")} →
            </Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {gamePlaceholders.map((game) => (
                <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{game.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{game.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Game</Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Check out our latest games and join the adventure!
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-100 px-8 py-6 text-lg">
            {t("hero.cta")}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
