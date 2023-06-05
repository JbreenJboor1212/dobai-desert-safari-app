import { useState } from "react";
import DubaiLogo from "../../images/logo.png";
import "./Header.css";
import Logo from "./Logo";
import Menu from "./Menu";
import Navbar from "./Navbar";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <Logo DubaiLogo={DubaiLogo} />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Menu toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
