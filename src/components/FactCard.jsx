import Btn from "./Btn";

function FactCard({ title, description, btnText, id }) {
  return (
    <div className="text-center hover:shadow-2xl transition-shadow pt-5 pb-10 border rounded-md">
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="my-4 mb-8 text-sm">{description}</p>
      <Btn url={`/about/${id}`} text={btnText} />
    </div>
  );
}

export default FactCard;
