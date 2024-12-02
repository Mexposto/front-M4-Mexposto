import Link from "next/link";
import UserWidget from "../UserWidget/UserWidget";

const Navbar = () => {
  return (
    <nav className="w-full bg-secondary h-navbar">
      <div className="bleed">
        <div className="flex justify-between">
          <Link href="/">Navbar</Link>
          <UserWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
