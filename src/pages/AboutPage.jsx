import { useState } from "react";
import AlanPaintImage from "../assets/alan-paint.jpeg";
import FactCard from "../components/FactCard";
import factsData from "../data/FactsData";

function AboutPage() {
  const [facts] = useState(factsData);
  return (
    <div className="bg-white">
      <section className="container mx-auto py-20 grid grid-cols-2 gap-10">
        <div>
          <img
            src={AlanPaintImage}
            alt="Alan Mathison Turing"
            className=" rounded-2xl inline shadow"
          />
        </div>
        <div className="">
          <h1 className="text-2xl">ალან ტიურინგი</h1>
          <p className="text-sm mt-6">
            ალან ტიურინგი იყო ლეგენდარული მათემატიკოსი და კრიპტოლოგი, რომელმაც
            მეორე მსოფლიო ომის დროს შექმნა მანქანა გერმანული შიფრის — „ენიგმას“
            — გასატეხად. მისი ნამუშევარი გადამწყვეტი აღმოჩნდა არა მხოლოდ ომის
            მიმდინარეობისთვის, არამედ თანამედროვე კომპიუტერული მეცნიერებისა და
            ხელოვნური ინტელექტის განვითარებისათვის.
          </p>
        </div>
      </section>
      <h2 className="text-2xl text-center">საინტერესო ფაქტები</h2>
      <section className="container mx-auto py-20 grid grid-cols-3 gap-10">
        {facts.map((fact) => (
          <FactCard
            key={fact.id}
            title={fact.title}
            description={fact.description}
            btnText={fact.btnText}
            id={fact.id}
          />
        ))}
      </section>
    </div>
  );
}

export default AboutPage;
