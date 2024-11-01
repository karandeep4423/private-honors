"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('/about/bg-img.jpg')` }} // Image from the public folder
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl text-center font-bold mb-4">
            Redécouvrons l'énergie au meilleur prix
          </h1>
          <p className="text-lg">Néogies votre courtier en énergie.</p>
        </div>
      </section>
      <div className="my-10 max-w-screen-xl m-auto w-full">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Pourquoi changer pour ENGIE ?</h2>
          <p>
            Vos énergies méritent un fournisseur d'expérience tourné vers
            l'avenir
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/** Cards */}
          <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img className="w-20 h-20" src="/about/telecharger.png" alt="Electricity and Natural Gas" />
            <h3 className="text-xl font-bold">
              Electricité et gaz naturel en toute transparence
            </h3>
            <p>
              Une offre duale avec un prix de marché indexé. Pour le gaz sur
              l’indice défini par la commission de régulation de l’énergie et
              pour l’électricité sur le tarif réglementé.
            </p>
          </div>
          <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img className="w-20 h-20" src="/about/globe.png" alt="Renewable Energies" />
            <h3 className="text-xl font-bold">
              Pour nos énergies renouvelables
            </h3>
            <p>
              Toutes nos offres d'électricité sont vertes, et avec l'option
              Vert+ choisissez une énergie verte produite en France.
            </p>
          </div>
          <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img className="w-20 h-20" src="/about/service-clients.png" alt="Customer Service" />
            <h3 className="text-xl font-bold">
              Pour notre service client 7 jours sur 7
            </h3>
            <p>
              Disponibles par téléphone et chat, nos conseillers sont là pour
              répondre à toutes vos questions.
            </p>
          </div>
          <div className="rounded-3xl p-5 m-5 flex flex-col items-center shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
            <img className="w-20 h-20" src="/about/facile.png" alt="Options and Services" />
            <h3 className="text-xl font-bold">
              Pour nos options et services si pratiques
            </h3>
            <p>
              Installation, entretien, dépannage, assurances... Nos solutions
              vous facilitent la vie !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
