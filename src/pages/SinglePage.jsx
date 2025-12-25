import { useParams } from "react-router-dom";
import { useState } from "react";
import factsData from "../data/FactsData";

function SinglePage() {
  const param = useParams();
  const [fact] = useState(factsData.find((fact) => fact.id == param.factId));

  return (
    <div className="bg-white">
      <section className="container mx-auto py-20 grid grid-cols-2 gap-10">
        <h2 className="text-2xl text-center">
          საინტერესო ფაქტი - {fact.title}
        </h2>
      </section>
    </div>
  );
}

export default SinglePage;
