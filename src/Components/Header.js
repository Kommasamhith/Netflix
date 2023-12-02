import { HN } from "../Utils/Assets";

const Header = () => {
  return (
    <div className="absolute py-2 px-8 bg-gradient-to-b from-black z-10">
      <img className="w-40" src={HN} alt="LOGO" />
    </div>
  );
};

export default Header;
