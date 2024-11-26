import React from "react";
import Sertificate1 from "../assets/image/Sertificate/Sertificate1.png";
import BackToTop from "./BackToTop";
import NavbarProject from "./NavbarProject";
import CardFeaturedProject from "../micro-components/FeaturedSertificate";
import RevoULogo from "../assets/image/RevoU.png"
import Sertificate2 from "../assets/image/Sertificate/Sertificate2.png"
import Sertificate4 from "../assets/image/Sertificate/Sertificate4.png"
import AlfaPrima from "../assets/image/logoalfaprimawith.png"
import Sertificate5 from "../assets/image/Sertificate/Sertificate5.png"
import alwaysngodingLogo from "../assets/image/AlwaysNgodingLogo.png"
import SertificateAI from "../assets/image/Sertificate/SertificateAI.png"
import LinkedinLogo from "../assets/image/LinkedIn-Logo.wine.png"
import sertificate6 from "../assets/image/Sertificate/Sertificate6.png"
import DicodingLogo from "../assets/image/dicoding-logo.png"
import idcampLogo from "../assets/image/idcamp-logo.png"



const Sertificate = () => {
  const sertificate = [
    {
      id: 1,
      thumbnail: sertificate6,
      name: " Dicoding Sertificate",
      description: "Belajar Dasar pemograman Web",
      tech: [DicodingLogo, idcampLogo], 
      linkVist: "https://drive.google.com/file/d/1leryC6ftuB124GhMHQJ6Esch7m7pfj5A/view?usp=drive_link",
    },
    {
      id: 2,
      thumbnail: Sertificate1,
      name: "RevoU Sertificate 1",
      description: "Intro To Data Analytics",
      tech: [RevoULogo], 
      linkVist: "https://drive.google.com/file/d/1leryC6ftuB124GhMHQJ6Esch7m7pfj5A/view?usp=drive_link",
    },
    {
      id: 3,
      thumbnail: Sertificate2,
      name: "RevoU Sertificate 2",
      description: "Intro To Digital Marketing",
      tech: [RevoULogo], 
      linkVist: "https://drive.google.com/file/d/1cPU1vzwcB9VuhsAJt-llEPXXOblWn5vl/view?usp=drive_link",
    },
    {
      id: 4,
      thumbnail: SertificateAI,
      name: "Linked-in Sertificate ",
      description: "What Is Generative AI?",
      tech: [LinkedinLogo], 
      linkVist: "https://drive.google.com/file/d/1pvNBSIhHs0fBEUSwbKX-IH0MzDSQJyni/view?usp=drive_link",
    },

    {
      id: 5,
      thumbnail: Sertificate4,
      name: "HIMMI Learning Sertificate",
      description: "Kick Start Front End Developer",
      tech: [AlfaPrima], 
      linkVist: "https://drive.google.com/file/d/1dZBjjHxqp_xbyHo0uS6Xxp2f1mr_bo_B/view?usp=drive_link",
    },
    {
      id: 6,
      thumbnail: Sertificate5,
      name: "Always Ngoding Sertificate",
      description: "HTML Sertificate",
      tech: [alwaysngodingLogo], 
      linkVist: "https://alwaysngoding.com/sertifikat/c2VydGlmaWthdC0xNzQy",
    },
  ];

  return (
    <>
      <NavbarProject />
      <BackToTop />

      <div className="main my-5 lg:px-28 flex flex-col gap-5 lg:gap-12">
        <div
          className="title"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <p className="text-white font-semibold font-Kanit text-4xl tracking-wide lg:tracking-wider xl:text-4xl">
            Sertificate
          </p>
        </div>

        <div
          className="projects flex flex-col gap-12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {sertificate.map((featuredsertificate) => (
            <CardFeaturedProject
              key={featuredsertificate.id}
              id={featuredsertificate.id}
              thumbnail={featuredsertificate.thumbnail}
              name={featuredsertificate.name}
              description={featuredsertificate.description}
              tech={featuredsertificate.tech}
              linkVist={featuredsertificate.linkVist}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sertificate;
