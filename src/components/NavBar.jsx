import logo from "../assets/darklogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";


const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-cemter justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/amulyaraj1234/"><FaLinkedin/></a>
            <a href="https://github.com/Amulyaraj07"><FaGithub/></a>
            <a href="https://leetcode.com/u/amulyaraj2707/"><SiLeetcode/></a>
            <a href="https://www.hackerrank.com/profile/amulyaraj1234"><SiHackerrank/></a>
        </div>
    </nav>
  )
}

export default NavBar

