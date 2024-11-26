// import image
import jsLogo from "../assets/image/js.png";
import htmlLogo from "../assets/image/html.png";
import Logo24 from "../assets/image/css-3.png"
import tailwindLogo from "../assets/image/tailwind.png";
import reactLogo from "../assets/image/react.png";

// import project pribadi
import pribadi1 from "../assets/image/ImageProject/pribadi1.png";
import pribadi2 from "../assets/image/ImageProject/pribadi2.png";
import pribadi3 from "../assets/image/ImageProject/pribadi3.png"



// import component
import CardFeaturedProject from "../micro-components/CardFeaturedProjects";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      thumbnail: pribadi1,
      name: "Fortofolion Pribadi",
      description: "Make simple website with javascript,React, and Tailwind language",
      tech: [jsLogo, htmlLogo, reactLogo,Logo24, tailwindLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 2,
      thumbnail: pribadi2,
      name: "Fortofolion Pribadi",
      description: "Make simple website with javascript,React, and Tailwind language",
      tech: [jsLogo, htmlLogo, reactLogo,Logo24, tailwindLogo],
      haveDemo: true,
      linkCode: "https://github.com/DedukWijaya071/WijayaDev",
      linkDemo: "https://wijaya-dev.vercel.app",
    },
    {
      id: 3,
      thumbnail: pribadi3,
      name: "Fortofolion Pribadi",
      description: "Make simple website with javascript,React, and Tailwind language",
      tech: [jsLogo, htmlLogo, reactLogo,Logo24, tailwindLogo],
      haveDemo: true,

    },


  ];

  return (
    <>
      <section id="projects">
        {/* ... (bagian lain dari komponen) */}
        <div className="projects flex flex-col gap-12">
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
      </section>
    </>
  );
};

export default FeaturedProjects;
