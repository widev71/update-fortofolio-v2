// ? import components
import NavbarProject from "./NavbarProject";
import BackToTop from "./BackToTop";

// * import image
import tailwindLogo from "../assets/image/tailwind.png";
import reactLogo from "../assets/image/react.png";
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";
import foto from "../assets/image/fortofolio01.png"
import foto2 from "../assets/image/wijaya01.png"
import logohtml from "../assets/image/html.png"
import logojs from "../assets/image/js.png"
import logocss from "../assets/image/css-3.png"
import prioject3 from "../assets/image/project3.png"

const FrontendProject = () => {
  const featuredProjects = [
    {
      id: 1,
      thumbnail: foto,
      name: "Fortofolio Pribadi",
      description: "Make simple website with ,React, and Tailwind language",
      tech: [reactLogo, tailwindLogo, logohtml, logojs],
      haveDemo: true,
      linkCode: "https://github.com/widev71/WijayaDev",
     linkDemo: "https://wijaya-dev.vercel.app", 
    },
    {
      id: 2,
      thumbnail: foto2,
      name: "Website Kelas",
      description:"Create a websit using Reactjs and tailwind css",
      tech: [reactLogo, tailwindLogo, logocss, logojs],
      haveDemo: true,
      linkCode: "https://github.com/widev71/Animation",
      linkDemo: "https://widev71.github.io/Animation/",
    },
    {
      id: 3,
      thumbnail: prioject3,
      name: "Website Kelas",
      description: "Make simple website with ,React js, and Tailwind language",
      tech: [reactLogo, tailwindLogo, logohtml, logojs],
      haveDemo: true,
      linkCode: "https://github.com/widev71/DKV-CLASS",
      linkDemo: "https://dkv-class.vercel.app",
    }
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
