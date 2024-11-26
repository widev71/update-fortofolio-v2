import BackToTop from "./BackToTop";
import NavbarProject from "./NavbarProject";
import jsLogo from "../assets/image/js.png";
import htmlLogo from "../assets/image/html.png";
import reactLogo from "../assets/image/react.png";
//import project pribadi
import pribadi1 from "../assets/image/ImageProject/pribadi1.png";
import pribadi2 from "../assets/image/ImageProject/pribadi2.png";

// import project magang
import project1 from "../assets/image/ImageProject/1.png"
import project3 from "../assets/image/ImageProject/3.png"
import project4 from "../assets/image/ImageProject/4.png"
import project5 from "../assets/image/ImageProject/19.png"
import project6 from "../assets/image/ImageProject/20.png"
import project7 from "../assets/image/ImageProject/23.png"
import project8 from "../assets/image/ImageProject/15.png"
import project9 from "../assets/image/ImageProject/16.png"
import project10 from "../assets/image/ImageProject/21.png"




import CardFeaturedProject from "../micro-components/CardFeaturedProjects";

const CompletedProject = () => {
  const completedProjects = [
    {
      id: 1,
      thumbnail:pribadi1,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 2,
      thumbnail:pribadi2,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 3,
      thumbnail:project3,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 4,
      thumbnail:project4,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 5,
      thumbnail:project1,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 6,
      thumbnail:project5,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 7,
      thumbnail:project6,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 8,
      thumbnail:project7,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 9,
      thumbnail:project8,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 10,
      thumbnail:project9,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 11,
      thumbnail:project10,
      name: "Fortofolio Pribadi",
      description: "Make simple website with javascript, React, and Tailwind",
      tech: [jsLogo, htmlLogo, reactLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
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
            My Project
          </p>
        </div>

        <div
          className="projects flex flex-col gap-12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {completedProjects.map((featuredProject) => (
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

export default CompletedProject;