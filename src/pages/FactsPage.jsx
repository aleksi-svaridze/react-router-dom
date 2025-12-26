import { useState } from "react";
import FactCard from "../components/FactCard";
import factsData from "../data/FactsData";

function FactsPage() {
  const [facts] = useState(factsData);
  return (
    <div className="bg-white">
      <section className="container px-4 mx-auto gap-y-5 grid md:grid-cols-2 md:gap-x-5 mt-5 md:py-20">
        {facts.map((fact) => (
          <FactCard
            key={fact.id}
            img={fact.img}
            title={fact.title}
            shortDesc={fact.shortDesc}
            description={fact.description}
          />
        ))}
      </section>
    </div>
  );
}

export default FactsPage;
