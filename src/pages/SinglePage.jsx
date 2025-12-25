import { useParams } from "react-router-dom";

function SinglePage() {
  const param = useParams();
  return (
    <div className="bg-blue-500">
      <section className="container mx-auto">
        <h1>fact id page {param.id}</h1>
      </section>
    </div>
  );
}

export default SinglePage;
