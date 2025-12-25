import AlanImage from "../assets/alan.webp";
import Btn from "../components/Btn";

function HomePage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto py-20 text-center">
        <img
          src={AlanImage}
          alt="Alan Mathison Turing"
          className="w-1/3 rounded-2xl inline shadow"
        />
        <h1 className="text-2xl mt-6 mb-10">ალან ტიურინგი</h1>
        <Btn url={"about"} text="შეიტყვეთ მეტი.." />
      </section>
    </div>
  );
}

export default HomePage;
