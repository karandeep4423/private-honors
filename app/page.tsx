import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center ">
        <h1 className="text-8xl">PRIVATE HONORS</h1>
        <p className="text-xl">ELEVATE YOUR TRAVEL EXPERIENCE</p>
      </div>
      {/* Second Section */}
      <div>
        <h2 className="text-5xl text-center font-bold">
          Facilities & Services
        </h2>
        <p className="text-xl text-center">
          With our service you may enjoy the finest life in our resort.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mx-3 mt-8 ">
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">Cashback à chaque réservation</p>
            <p>
              Hôtels, voitures, transferts… Avec Private Honors, chaque dépense
              vous rapporte ! Transformez vos voyages en opportunités
              d'économies.
            </p>
          </div>
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">
              Modifications et annulations instantanées
            </p>
            <p>
              Dites adieu aux appels interminables ! Notre chat en ligne vous
              permet de gérer vos réservations en quelques clics, en toute
              simplicité.
            </p>
          </div>
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">Maîtrise totale de vos voyages</p>
            <p>
              Accédez aux meilleures offres, personnalisez votre séjour et
              profitez d'un service VIP, tout en gardant le contrôle.
            </p>
          </div>
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">Assistance en cas d'annulation</p>
            <p>
              Un imprévu ? Private Honors vous guide et vous conseille pour
              obtenir un remboursement.
            </p>
          </div>
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">
              Cartes cadeaux sur mesure pour les entreprises
            </p>
            <p>
              Récompensez vos employés et fidélisez vos clients avec des cartes
              cadeaux Private Honors. Offrez-leur un accès privilégié à une
              large sélection d'hôtels, de locations de voitures et de services
              de transport.
            </p>
          </div>
          <div className="flex flex-col items-center w-fit min-h-fit p-5 rounded-2xl bg-slate-100 text-black">
            <Image
              alt="money"
              width={100}
              height={100}
              src="/dollar.png"
            ></Image>
            <p className="text-xl font-bold">Abonnement flexible pour tous</p>
            <p>
              Particuliers et entreprises, profitez d'avantages exclusifs à un
              prix abordable. Réductions, cashbacks et accompagnement
              personnalisé vous garantissent un voyage serein et rentable.
            </p>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className=" rounded-2xl items-center justify-center flex flex-col lg:flex-row  gap-5 text-black py-14 px-6 my-10 mx-5 bg-blue-100 ">
        <div className="w-full lg:w-1/2 flex flex-col	">
          <h2 className="text-5xl font-bold">Pourquoi nous choisir</h2>
          <p className="py-4">
            Voyagez en toute sérénité, maîtrisez chaque détail et profitez
            d'avantages uniques réservés à nos membres. Découvrez un monde de
            privilèges et d'économies, conçu pour les voyageurs exigeants.
            Private Honors, votre passeport pour des voyages d'exception.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Voyage</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Cashback</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Économies</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Simplicité</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Flexibilité</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Service client</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">VIP</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Contrôle</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Entreprises</p>
            </div>
            <div className="flex gap-2">
              <Image
                alt="tick"
                height={20}
                width={20}
                src="/dollar.png"
              ></Image>
              <p className="text-xl font-bold">Cartes cadeaux</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="rounded-2xl"
            height={500}
            width={500}
            alt="whychooseus"
            src="/whychooseus.jpg"
          ></Image>
        </div>
      </div>
      {/* Section Fourth */}
      <div>
        <div className="max-w-screen-xl text-lg xl:text-xl  m-auto grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 ">
          <div
            id="book-lesson"
            className="text-gray-600 bg-slate-200 justify-center h-fit py-10  gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
          >
            <h2 data-aos="fade-up" className="text-5xl text-center  font-bold">
              Standard
            </h2>
            <p data-aos="fade-up" className="text-5xl  font-bold">
              $49
              <span className="font-thin text-base sm:text-lg xl:text-xl ">
                /per month
              </span>
            </p>
            <div
            
              className="flex text-black flex-col space-y-3 px-8 font-normal  "
            >
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Attend a lesson on zoom</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Shift another tutor after an unsatisfactory lesson</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>The duration of a lesson is an hour</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Get material to boost learning</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Reschedule a lesson before 4 hours</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Clear your doubts after the lesson</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Get a confirmation after booking</p>
              </div>
              <div data-aos="fade-up" className="flex gap-2">
                <Image
                  className="w-6 h-6 mt-1"
                  width={23}
                  height={23}
                  alt="check icon"
                  src="/check.png"
                ></Image>
                <p>Get track of your progress</p>
              </div>
            </div>
            <Link
              href={{ pathname: "/book-lesson", query: { lesson: "single" } }}
            >
              <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
