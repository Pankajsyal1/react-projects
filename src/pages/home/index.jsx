import Profile from "../../components/about/Profile";
import Section from "../../components/ui/sections/Section";
import TechStacks from "../../components/about/TechStacks";
import SocialLinks from "../../components/about/SocialLinks";
import ProjectList from "../../components/projects/ProjectList";

const Home = () => {
  return (
    <>
      {/* About Section */}
      <Section title={""}>
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
