import Btn from "./Btn";

function FactCard({ title, shortDesc, img, btnText, id }) {
  return (
    <div className="text-center hover:shadow-2xl transition-shadow pb-10 border rounded-md w-2/3 mx-auto">
      <div
        className="h-60 bg-cover mb-5"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="my-4 mb-8 text-sm w-1/2 mx-auto">{shortDesc}</p>
      <Btn url={`/about/${id}`} text={btnText} />
    </div>
  );
}

export default FactCard;
