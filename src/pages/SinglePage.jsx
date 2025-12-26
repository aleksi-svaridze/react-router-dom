import { useParams } from "react-router-dom";
import { useState } from "react";
import factsData from "../data/FactsData";

function SinglePage() {
  const param = useParams();
  const [fact] = useState(
    factsData.find((fact) => fact.title == param.factTitle)
  );

  return (
    <div className="bg-white">
      <section className="container mx-auto pt-5 md:pt-20 grid md:grid-cols-2 gap-10 px-4">
        <div>
          <img src={fact.img} alt={fact.title} className="rounded-md" />
        </div>
        <div>
          <h2 className="text-2xl mb-10">
            საინტერესო ფაქტი -
            <span className="font-bold uppercase">{fact.title}</span>
          </h2>
          <p className="leading-8">{fact.description}</p>
        </div>
      </section>
    </div>
  );
}

export default SinglePage;
