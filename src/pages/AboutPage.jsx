import AlanPaintImage from "../assets/alan-paint.jpeg";

function AboutPage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto pt-5 md:py-20 grid md:grid-cols-2 gap-10 px-4">
        <div>
          <img
            src={AlanPaintImage}
            alt="Alan Mathison Turing"
            className=" md:rounded-2xl inline shadow w-full"
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
    </div>
  );
}

export default AboutPage;
