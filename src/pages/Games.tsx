
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  {
    id: 4,
    title: "Racing Stars",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Race against friends in this fast-paced cartoon racing game."
  },
  {
    id: 5,
    title: "Pirate Quest",
    image: "https://images.unsplash.com/photo-1569277234863-42b256d685ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Set sail for adventure in this pirate-themed action game."
  },
  {
    id: 6,
    title: "Fairy Forest",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Explore a magical forest filled with mysteries and wonder."
  }
];

const Games = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">
          {t("games.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gamePlaceholders.map((game) => (
            <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
