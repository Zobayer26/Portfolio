import Container from "../Container"
import { RiSendPlaneLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center ">
      <Container>
        <div className="flex items-center justify-between   md:gap-0">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-[#8873ef]
             text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              Z
            </span>
            <div className=" leading-[20px]">
              <h2 className="text-xl text-[#193256] font-[700]">Zobayer Hossain </h2>
              <p className="text-[#193256]  text-[18px] font-[500]">personal</p>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-[#193256] font-[600]">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center  leading-[18px] gap-4">
            <button className="flex  items-center gap-2 text-[#193256] font-[600] border border-solid 
            border-[#193256] sm:px-4 px-2 py-2 rounded hover:bg-[#193256] hover:text-white hover:font-[500]
             ease-in duration-500 ">
              <RiSendPlaneLine />
              <p>Let's Talk</p>
            </button>
            <span className="text-2xl text-[#193256]  md:hidden cursor-pointer "><MdMenu /></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header