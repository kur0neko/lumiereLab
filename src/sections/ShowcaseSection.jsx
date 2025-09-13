// AppShowcase.jsx (or .tsx if you use TS)
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "../constants"; // adjust the path as needed

gsap.registerPlugin(ScrollTrigger);

const LinkList = ({ links = [] }) => {
  if (!links.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {links.map((l, i) => (
        <a
          key={i}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-400 underline hover:text-blue-200"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
};

const ProjectCard = ({ project, featured }) => {
  if (featured) {
    return (
      <div className="first-project-wrapper project-card" data-card>
        <div className="image-wrapper">
          <img src={project.image} alt={project.imageAlt} />
        </div>
        <div className="text-content">
          <h2>{project.title}</h2>
          {project.description && (
            <p className="text-white-50 md:text-xl">{project.description}</p>
          )}
          <LinkList links={project.links} />
        </div>
      </div>
    );
  }
  return (
    <div className="project project-card" data-card>
      <div className={`image-wrapper ${project.bg || ""}`}>
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <h2>{project.title}</h2>
      {project.description && (
        <p className="text-white-50/80 text-base">{project.description}</p>
      )}
      <LinkList links={project.links} />
    </div>
  );
};

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Fade in the section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );

      // Animate each card on scroll
      const cards = gsap.utils.toArray("[data-card]");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.12 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full" ref={containerRef}>
        <div className="showcaselayout">
          {featured && <ProjectCard project={featured} featured />}
          <div className="project-list-wrapper overflow-hidden">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
