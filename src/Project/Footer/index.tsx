import copyright from "../assets/copyright.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import notion from "../assets/notionLogo.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex-col bg-grey h-[110px] py-4 sm:p-4">
      <div className="flex gap-1 justify-center ">
        <a
          className="hover:bg-darkgreen rounded-3xl"
          href="https://www.linkedin.com/in/dev-dayeonlee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-10" src={linkedin} alt="linkedin" />
        </a>
        <a
          className="hover:bg-darkgreen rounded-3xl"
          href="https://github.com/day-lee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-10" src={github} alt="github" />
        </a>
        <a
          className="hover:bg-darkgreen rounded-3xl"
          href="https://diamond-law-064.notion.site/Dayeon-Lee-Frontend-Engineer-1ee316387444473280bf56fe2eab6be4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-10" src={notion} alt="notionPortfolio" />
        </a>
      </div>
      <div className="flex sm:items-center justify-center gap-1 p-2">
        <img className="w-4 h-4 mt-1 sm:mt-0" src={copyright} alt="Copyright" />
        <span>2024 all rights reserved | day-lee</span>
      </div>
    </div>
  );
};
export default Footer;
