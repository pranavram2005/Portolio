import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { myProjects } from '../constants/index.js';
import useParallax from '../hooks/useParallax.js';

const Projects = () => {
  const numeralRef = useParallax(-70);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div ref={numeralRef} className="ghost-numeral absolute -left-4 top-16 hidden lg:block">
        04
      </div>

      <div className="section-shell">
        <SectionHeader
          index="04"
          label="PROJECTS"
          title="Interfaces I owned end to end."
          intro="Each of these shipped to real users. The frontend was mine — components, state, responsiveness and the API wiring behind them."
          accent="blue"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {myProjects.map((project, index) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={(index % 2) * 0.08}
              className={`h-full ${project.featured ? 'lg:col-span-2' : ''}`}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
