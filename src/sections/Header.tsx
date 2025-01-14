import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg";
export const Header = () => {
  return (
  <header className="sticky top-0 backdrop-blur-sm z-20">
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">Streamline you routine and boost your regime.</p>
      <div className="inline-flex gap-1 items-center">
        <p className="md:hidden sm:block">Revolutionize your Fitness Journey</p>
        <p className="hidden md:block">Start Today</p>
        <ArrowRight className= "h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Gym Logo" height={40} width={40}/>
          <MenuIcon className="h-5 w-5 md:hidden"/>
          <nav className="hidden md:flex gap-6 text-black items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Diet</a>
            <a href="#">Workout</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center">Get Started</button>
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
};
