import InfoCard from './InfoCard';

const Profile = () => {
  const developerInfo = [
    "Currently working as Frontend Developer and Designer",
    "Skilled in HTML5, CSS3, Bootstrap 3/4/5, TailwindCSS, SASS, CSS Modules",
    "Proficient in WordPress, jQuery, JavaScript, Vue.js, React.js, styled-components",
    "Experienced with Nuxt.js, Next.js, Redux, Redux Toolkit, React Query, Angular",
    "Well-versed in Svelte, Ant Design, Primeflex, PrimeNG, Git",
    "Proficient in design tools like Adobe Photoshop, Adobe XD, and Figma",
  ];

  const additionalInfo = [
    "Experienced in building responsive websites and web applications",
    "Expert in UI/UX design principles, ensuring user-centered workflows",
    "Strong knowledge of modular build structures and third-party API integration",
    "Good understanding of SEO best practices for web applications",
    "Collaborative team player with an agile development approach",
    "Committed to meeting deadlines with 100% satisfaction guarantee",
  ];

  return (
    <>
      <div className='mb-3'>
        <h1 className="text-5xl flex gap-2 items-center">
          Hi
          <img
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            width="35"
            alt="Hi"
            className="shrink-0"
          />
          I&apos;m Pankaj Kumar
          <img
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            width="35"
            alt="Hi"
            className="shrink-0"
          />
        </h1>
        <div className='mt-3 flex flex-col gap-2'>
          <i>- Currently working as Frontend Developer and UI/UX Designer</i>
          <i>- 4+ years of experience</i>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <InfoCard title="Skills & Expertise" points={developerInfo} />
        <InfoCard title="Additional Info" points={additionalInfo} />
      </div>
    </>
  );
};

export default Profile;
