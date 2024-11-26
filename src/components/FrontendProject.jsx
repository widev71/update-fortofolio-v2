// ? import components
import NavbarProject from "./NavbarProject";
import BackToTop from "./BackToTop";

// * import image
import tailwindLogo from "../assets/image/tailwind.png";
import reactLogo from "../assets/image/react.png";
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";
import logohtml from "../assets/image/html.png"
import logojs from "../assets/image/js.png"

// import project pribadi
import pribadi1 from "../assets/image/ImageProject/pribadi1.png";
import pribadi2 from "../assets/image/ImageProject/pribadi2.png";

const FrontendProject = () => {
  const featuredProjects = [
    {
      id: 1,
      thumbnail: pribadi1,
      name: "Fortofolio Pribadi",
      description: "Make simple website with ,React, and Tailwind language",
      tech: [reactLogo, tailwindLogo, logohtml, logojs],
      haveDemo: true,
      linkCode: "https://github.com/widev71/WijayaDev",
     linkDemo: "https://wijaya-dev.vercel.app", 
    },
    {
      id: 2,
      thumbnail: pribadi2,
      name: "Fortofolio Pribadi",
      description: "Make simple website with ,React, and Tailwind language",
      tech: [reactLogo, tailwindLogo, logohtml, logojs],
      haveDemo: true,
      linkCode: "https://github.com/widev71/WijayaDev",
     linkDemo: "https://wijaya-dev.vercel.app", 
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
            Frontend
          </p>
        </div>

        <div
          className="projects flex flex-col gap-12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {featuredProjects.map((featuredProject) => (
            <CardFeaturedProject
            key={featuredProject.id}
            id={featuredProject.id}
            thumbnail={featuredProject.thumbnail}
            name={featuredProject.name}
            description={featuredProject.description}
            tech={featuredProject.tech}
            haveDemo={featuredProject.haveDemo}
            linkCode={featuredProject.linkCode}
            linkDemo={featuredProject.linkDemo}
          />
          ))}
        </div>
      </div>
    </>
  );
};

export default FrontendProject;
