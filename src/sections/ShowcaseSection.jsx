import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/DemoGif.gif" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Project I currently working, mobile app encourage everyone to cook, intuitive UI/UX lanching soon!
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS with industrial standard and user-friendly experience.
              </p>
               <a
               href="https://github.com/kur0neko/FoodReal"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-3 inline-block text-blue-400 underline hover:text-blue-200"
               >View on GitHub</a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project4.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Note Hub: Note taking web application (Python, Flask, SQLAlchemy, Django) </h2>
              <a
               href="https://github.com/kur0neko/DesignWebsiteWithFlask"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-3 inline-block text-blue-400 underline hover:text-blue-200"
               >View on GitHub</a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Neural Network Classifier for Iris Dataset (PyTorch, NumPy, Pandas, Python)</h2>
               <a
               href="https://github.com/kur0neko/NeuralNetwork_Flower"
               target="_blank"
               rel="noopener noreferrer"
               className="mt-3 inline-block text-blue-400 underline hover:text-blue-200"
               >View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
