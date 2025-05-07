
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("about.title")}
        </h1>
        <div className="max-w-4xl mx-auto prose lg:prose-xl">
          <p className="text-lg">{t("about.description")}</p>
          
          {/* More content will go here */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              NexZap Studio was founded in 2020 by a team of passionate game developers with a shared vision: to create engaging, fun, and memorable game experiences with a distinct cartoon style. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
