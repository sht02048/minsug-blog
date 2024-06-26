import { FaGithub } from "react-icons/fa6";
import Icon from "../../UI/Icon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-10">
      <Icon href="https://github.com/sht02048">
        <FaGithub className="text-2xl" />
      </Icon>
      <div className="flex space-x-2 justify-center mt-4">
        <div>Minsug</div>
        <div> • </div>
        <div>© 2024</div>
        <div> • </div>
        <a href="/">https://minsug.dev</a>
      </div>
    </footer>
  );
}
