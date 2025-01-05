import Profile from "../../components/about/Profile";
import ProjectList from "../../components/projects/ProjectList";
import Section from "../../components/sections/Section";
import SocialLinks from "../../components/SocialLinks";
import TechStacks from "../../components/TechStacks";

const Home = () => {
  return (
    <>
      {/* About Section */}
      <Section title={"Tech Stack"}>
        <Profile />
      </Section>

      {/* Tech Stack Section */}
      <Section title={"Tech Stack"}>
        <TechStacks />
      </Section>

      {/* Social Media Links Section */}
      <Section title={"Let's Connect"}>
        <SocialLinks />
      </Section>

      {/* React projects */}
      <ProjectList />
    </>
  );
};

export default Home;
