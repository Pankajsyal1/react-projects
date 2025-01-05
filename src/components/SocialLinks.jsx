const badges = [
  {
    href: "https://www.linkedin.com/in/pankaj-kumar-a1641ba6/",
    imgSrc: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com/pankajk76520654",
    imgSrc: "https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white",
    alt: "Twitter",
  },
  {
    href: "https://pankaj-portfolio-reactjs.vercel.app/",
    imgSrc: "https://img.shields.io/badge/Portfolio-18A303?style=for-the-badge&logo=ionic&logoColor=white",
    alt: "Portfolio",
  },
  {
    href: "mailto:mpankaj.syal1@gmail.com",
    imgSrc: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
    alt: "Gmail",
  },
  {
    href: "https://api.whatsapp.com/send/?phone=919478629522&text=I%27m+interested+in+website+design",
    imgSrc: "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white",
    alt: "WhatsApp",
  },
  {
    href: "https://telegram.me/panku522",
    imgSrc: "https://img.shields.io/badge/Telegram-0088CC?style=for-the-badge&logo=telegram&logoColor=white",
    alt: "Telegram",
  },
  {
    href: "https://join.skype.com/invite/WJDN0F76RCeI",
    imgSrc: "https://img.shields.io/badge/Skype-00AFF0?style=for-the-badge&logo=skype&logoColor=white",
    alt: "Skype",
  },
  {
    href: "https://pankajsyal1.slack.com/team/U02MPFBJSK1",
    imgSrc: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white",
    alt: "Slack",
  },
  {
    href: "https://stackoverflow.com/users/27401510/pankaj-syal",
    imgSrc: "https://img.shields.io/badge/Stack%20Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white",
    alt: "Stack Overflow",
  },
  {
    href: "https://github.com/Pankajsyal1",
    imgSrc: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub",
  },
];

const SocialLinks = () => (
  <div style={{ display: "inline-flex", gap: 8, flexWrap: "wrap" }}>
    {badges.map((badge, index) => (
      <a
        key={index}
        href={badge.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img align="center" src={badge.imgSrc} alt={badge.alt} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
