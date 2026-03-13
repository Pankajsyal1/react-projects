import Profile from "./components/Profile";
import Section from "./components/Section";
import TechStacks from "./components/TechStacks";
import SocialLinks from "./components/SocialLinks";
import ProjectList from "./components/ProjectList";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="gradient-orb gradient-orb-primary w-[500px] h-[500px] -top-[150px] -left-[150px] animate-pulse-glow"
        />
        <div 
          className="gradient-orb gradient-orb-blue w-[400px] h-[400px] top-[20%] -right-[100px] animate-float-slow"
        />
        <div 
          className="gradient-orb gradient-orb-purple w-[350px] h-[350px] top-[50%] -left-[100px] animate-float"
        />
        <div 
          className="gradient-orb gradient-orb-pink w-[400px] h-[400px] bottom-[10%] -right-[150px] animate-pulse-glow"
        />
        <div className="absolute inset-0 pattern-dots-light opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
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
      </div>
    </div>
  );
};

export default Home;
