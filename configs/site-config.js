import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";

const siteConfig = {
  copyright: `${new Date().getFullYear()} | Ryan Naing.`,
  author: {
    name: "Ryan Naing",
    accounts: [
      {
        url: "https://github.com/nyan9",
        label: "Github Account",
        icon: <FaGithub />,
      },
      {
        url: "https://www.linkedin.com/in/ryannaing/",
        label: "LinkedIn Account",
        icon: <FaLinkedin />,
      },
      {
        url: "https://drive.google.com/file/d/1KCouuscP6CS2savDsSx2wsEFyunURYiG/view?usp=sharing",
        label: "Resume",
        icon: <FaCopy />,
      },
    ],
  },
};

export default siteConfig;
