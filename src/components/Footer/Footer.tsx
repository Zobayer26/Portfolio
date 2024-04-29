import Container from "../Container"
import { GoMail } from "react-icons/go";
import { FollowLink } from "../../utils/FollowLink";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-8">
      <Container>
        <div className="sm:flex items-center justify-between md:gap-8 pb-4">
          <div className="w-full  sm:w-1/2">
            <h2 className="  text-[26px] leading-10 text-white font-[600] mb-5 md:text-[32px]">
              Want to make beautiful   product ?
            </h2>
            <a href="#contact">
              <button className=" flex items-center gap-2 bg-[#8873ef] text-white
                  hover:bg-[#193256] ease-in duration-300 font-[500] px-4 py-2 rounded">
                < GoMail />
                <span>Hire me</span>
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-justify text-gray-300 leading-7 mt-4 sm:mt-0">
            Let's bring your ideas to life! Reach out to discuss potential collaborations 
            or projects.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[16px]">Follow Me:</span>
              <span className=" cursor-pointer flex gap-4 items-center ">
                {
                  FollowLink.map((item) => (
                    <a key={item.id}
                      href={item.link}
                      className="w-[35px] h-[35px] bg-[#2b2d33] rounded-[50px]  p-1 
                       flex items-center justify-center ">
                      <span className="text-gray-300 font-[500] text-[18px] ">
                        <item.icon />
                      </span>
                    </a>
                  ))
                }
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-white font-[500]">Copyright © Zobayer Hossain. All rights reserved.</div>
      </Container>
    </footer>
  )
}

export default Footer