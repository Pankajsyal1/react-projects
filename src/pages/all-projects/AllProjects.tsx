import Section from "../home/components/Section"
import ProjectLinks from "./components/ProjectsLinks"

const Projects = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <Section title={"React Projects"}>
        <ProjectLinks />
      </Section>
    </div>
  )
}

export default Projects