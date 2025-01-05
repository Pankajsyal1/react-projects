// JSON array containing badge details
const badges = [
  { src: "https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=white", alt: "photoshop" },
  { src: "https://img.shields.io/badge/Illustrator-FF9A00?style=for-the-badge&logo=adobe-illustrator&logoColor=white", alt: "illustrator" },
  { src: "https://img.shields.io/badge/Adobe%20XD-FF9A00?style=for-the-badge&logo=adobe-xd&logoColor=white", alt: "adobe xd" },
  { src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt: "figma" },
  { src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", alt: "html5" },
  { src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", alt: "css3" },
  { src: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white", alt: "bootstrap" },
  { src: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white", alt: "sass" },
  { src: "https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white", alt: "tailwindcss" },
  { src: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white", alt: "jquery" },
  { src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", alt: "javascript" },
  { src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white", alt: "typescript" },
  { src: "https://img.shields.io/badge/Git-F44D27?style=for-the-badge&logo=git&logoColor=white", alt: "git" },
  { src: "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white", alt: "vuejs" },
  { src: "https://img.shields.io/badge/Vuex-3C6E8F?style=for-the-badge&logo=vue.js&logoColor=white", alt: "vuex" },
  { src: "https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white", alt: "nuxtjs" },
  { src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white", alt: "reactjs" },
  { src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white", alt: "nextjs" },
  { src: "https://img.shields.io/badge/Ant%20Design-1677FF?style=for-the-badge&logo=ant-design&logoColor=white", alt: "antdesign" },
  { src: "https://img.shields.io/badge/TanStack%20Query-EC4440?style=for-the-badge&logo=react-query&logoColor=white", alt: "tanstack query" },
  { src: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white", alt: "redux" },
  { src: "https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white", alt: "redux toolkit" },
  { src: "https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white", alt: "svelte" },
  { src: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white", alt: "angular" },
  { src: "https://img.shields.io/badge/Astro-FF5D3D?style=for-the-badge&logo=astro&logoColor=white", alt: "astro" },
  { src: "https://img.shields.io/badge/Motion-0088CC?style=for-the-badge&logo=motion&logoColor=white", alt: "motion" },
  { src: "https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white", alt: "wordpress" },
  { src: "https://img.shields.io/badge/Webflow-4353FF?style=for-the-badge&logo=webflow&logoColor=white", alt: "webflow" },
  { src: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black", alt: "linux" },
  { src: "https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=white", alt: "gsap" },
  { src: "https://img.shields.io/badge/Framer-000000?style=for-the-badge&logo=framer&logoColor=white", alt: "framer" },
  { src: "https://img.shields.io/badge/AOS-DA552F?style=for-the-badge&logo=aos&logoColor=white", alt: "aos" },
  { src: "https://img.shields.io/badge/Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white", alt: "windows" },
  { src: "https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white", alt: "mac" }
];

const TechStacks = () => {
  return (
    <div className="inline-flex gap-2 flex-wrap">
      {badges.map((badge, index) => (
        <img key={index} src={badge.src} alt={badge.alt} />
      ))}
    </div>
  );
};

export default TechStacks;