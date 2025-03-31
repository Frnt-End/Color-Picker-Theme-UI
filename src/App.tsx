import React, { useState, useEffect } from "react";
import {
  Zap,
  Code2,
  Monitor,
  Palette,
  ChevronUp,
  Mail,
  ExternalLink,
  Contact,
  GitBranch,
  Layout
} from "lucide-react";

function App() {
  const [currentColor, setCurrentColor] = useState("#28bbd9");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCurrentColor(color);
    document.documentElement.style.setProperty("--theme-color", color);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const projects = [
    {
      title: "Next.js 15 Blog",
      description:
        "Articles Blog App Using Sanity and Tailwind / ShadCN (PPR rendering).",
      image: "https://i.ibb.co/8LZ2dd0Y/blog.jpg",
      link: "https://nextjs-15-sanity-blog-gules.vercel.app/",
      tags: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
      title: "Current Weather App",
      description:
        "Fetch and Toggle display of current weather in Berlin, Paris, New York & London.",
      image: "https://i.ibb.co/FkRXzwnp/preview.jpg",
      link: "https://frnt-end.github.io/Weather-App-React",
      tags: ["React", "axios", "CSS"]
    },
    {
      title: "Creative Protfolio",
      description:
        "Bringing creative visions to life through elegant design and seamless UX.",
      image:
        "https://frnt-end.github.io/portfolio/images/gallery/thumbs/02.jpg",
      link: "https://frnt-end.github.io/portfolio/",
      tags: ["HTML", "SASS", "JavaScript"]
    }
  ];

  const skills = [
    {
      icon: Layout,
      name: "Prototyping",
      items: ["Figma", "Adobe XD", "Design Systems"]
    },
    { icon: Palette, name: "Design", items: ["Adobe", "Canva", "UI/UX"] },
    {
      icon: Code2,
      name: "Development",
      items: ["React / Next", "TypeScript", "Tailwind CSS"]
    },

    { icon: Monitor, name: "DX", items: ["Sanity", "Vercel", "Storybook"] }
  ];

  return (
    <div className="relative z-0 min-h-screen bg-gray-900 text-gray-100">
      <div className="text-center 2xl:w-[5%] lg:w-[7%] w-[20%] top-[40%] right-0 fixed z-50">
        <div className="flex-col w-full items-center space-y-4 p-4 rounded-lg bg-gray-800/40 shadow-2xl">
          <h2 className="block text-gray-300 font-bold">Change Theme Color</h2>
          <input
            type="color"
            value={currentColor}
            onChange={handleColorChange}
            className="w-12 h-12 rounded-lg !border-0 !shadow-none !ring-offset-0 !inset-0 !ring-0 !ring-transparent !ring-offset-transparent !border-transparent cursor-pointer !outline-none !outline-offset-0 !focus:outline-none !appearance-none"
            style={{
              backgroundColor: currentColor,
              MozAppearance: "none",
              WebkitAppearance: "none",
              boxSizing: "border-box"
            }}
          />
          <div>
            <p className="font-light text-xs uppercase">{currentColor}</p>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
        <div className="flex justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={scrollToTop}
            className="cursor-pointer flex items-center space-x-2"
          >
            <Zap
              className="w-8 h-8"
              style={{
                color: currentColor
              }}
            />
            <span className="text-xl font-bold">Portfolio</span>
          </div>
        </div>
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 z-50 bg-transparent p-4 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          style={{
            boxShadow: `0 -4px 20px ${currentColor}80`
          }}
        >
          <ChevronUp
            className="w-8 h-8"
            style={{
              color: currentColor
            }}
          />
        </button>
      )}

      <header className="relative overflow-hidden py-24 sm:py-48">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentColor}20 0%, transparent 50%)`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="font-nunito uppercase text-4xl sm:text-6xl font-bold mb-2"
            style={{ color: currentColor }}
          >
            Creative Developer
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            Use the color picker on the right to play around with the color
            theme{`:)`}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-95"
              style={{
                borderColor: currentColor,
                boxShadow: `0 0 20px ${currentColor}40`
              }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border-2 hover:scale-95 transition-all duration-300"
              style={{ borderColor: currentColor }}
            >
              View Projects
            </a>
          </div>
        </div>
      </header>

      <section id="projects" className="py-20 bg-gray-800/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: currentColor }}
          >
            Featured GH Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-950/40 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  boxShadow: `0 0 30px -15px ${currentColor}`
                }}
              >
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "relative",
                      zIndex: 10
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover size-fit"
                    />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${currentColor} 10%, transparent)`,
                          color: currentColor
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: currentColor }}
          >
            Skills & Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="border-2 border-solid rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300"
                  style={{ borderColor: currentColor }}
                >
                  <Icon
                    className="w-8 h-8 mb-4"
                    style={{ color: currentColor }}
                  />
                  <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                  <ul className="space-y-2 text-gray-400">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-48 bg-gray-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: currentColor }}
          >
            Get in Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <a
                href="mailto:nirit.nagar.dev@gmail.com"
                className="flex items-center justify-center border-gray-700 border-2 space-x-3 p-4 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6" style={{ color: currentColor }} />
                <span>Say Hello</span>
              </a>
              <a
                href="https://github.com/Frnt-End"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-gray-700 border-2 space-x-3 p-4 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <GitBranch
                  className="w-6 h-6"
                  style={{ color: currentColor }}
                />
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/nirit-nagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-gray-700 border-2 space-x-3 p-4 rounded-xl hover:bg-gray-700 transition-colors"
              >
                <Contact className="w-6 h-6" style={{ color: currentColor }} />
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="backdrop-blur-lg bg-gray-900/80 border-t border-gray-800">
        <div className="flex justify-center h-16 max-w-7xl mx-auto py-6 sm:py-10 lg:py-12">
          <p className="text-gray-500">
            All rights reserved. © Copyright 2019 Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
