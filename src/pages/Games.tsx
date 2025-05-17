import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const gamePlaceholders = [
  {
    id: 1,
    title: "Pig Adventure",
    image: "../lovable-uploads/pigad.png", // Thay bằng ảnh thật của bạn
    description:
      "An exciting space exploration game with vibrant cartoon graphics.",
    url: "https://thuonggamedev.itch.io/pigadventure",
  },
  {
    id: 2,
    title: "Undead Survivor",
    image: "../lovable-uploads/UndeadSurvivor.png", // Thay bằng ảnh thật của bạn
    description:
      "Collect and battle with cute cartoon monsters in this fantasy world.",
    url: "https://thuonggamedev.itch.io/undead-survivor",
  },
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
            <Card
              key={game.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
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
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2 border border-gray-300 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  View Game
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
