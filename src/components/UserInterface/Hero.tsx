import Container from "../Container"
import CountUp from "react-countup"
import { GoMail } from "react-icons/go";
import { RiAppsLine } from "react-icons/ri";
import { FollowLink } from "../../utils/FollowLink";
import { Experience } from "../../utils/Experience";

const Hero = () => {
  return (
    <section id="about">
      <Container>
        <div className="pt-14">
          <div className=" flex items-center justify-between sm:flex-col md:flex-row">
            <div className="w-full md:basis-1/2">
              <h4 data-aos="fade-right"
                data-aos-duration="1500"
                className="text-[#081e21] text-[16px] font-[600]">Hello welcome</h4>
              <h1 data-aos="fade-up"
                data-aos-duration="1500"
                className="text-[#081e21] font-[800] text-[28px] sm:text-[40px] 
                leading-[35px] sm:leading-[46px] mt-5">
                I'm Zobayer Hossain <br /> Software Developer
              </h1>
              <div data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex  items-center gap-6 mt-7">
                <a href="#contact">
                  <button className=" flex items-center gap-2 bg-[#8873ef] text-white
                  hover:bg-[#193256] ease-in duration-300 font-[500] px-4 py-2 rounded">
                    < GoMail />
                    <span>Hire me</span>
                  </button>
                </a>
                <a className=" font-[600] text-[#193256] text-[16px] border-b 
                border-solid border-[#193256]" href="#portfolio">
                  See portfolio
                </a>
              </div>
              <p data-aos="fade-left"
                data-aos-duration="1500"
                className=" flex items-baseline gap-2 font-[500] text-[15px] text-[#081e21] leading-7
                   sm:pl-14 sm:pr-10 mt-12 text-justify">
                <span><RiAppsLine /></span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                autem molestiae sed repudiandae obcaecati quod vitae dolor quaerat iste facilis
              </p>
              <div className="flex items-center mt-14 gap-8 text-[#193256]">
                <span className=" text-[15px] font-[600]">Follow me:</span>
                <span className=" flex  items-center gap-8 text-[18px] font-[600]">
                  {
                    FollowLink.map((item) => (
                      <a key={item.id}
                        href={item.link}>
                        <item.icon />
                      </a>
                    ))
                  }
                </span>
              </div>
            </div>
            <div className=" basis-1/3 mt-4 sm:mt-0">
              {/* <figure className="flex items-center justify-center">
                <img src="/hero.jpg" alt="" />
              </figure> */}
              <img src="/hero.jpg" alt="" />
            </div>
            <div className=" basis-1/5 flex justify-between text-center mt-4 
            flex-wrap gap-3 md:mt-0 md:flex-col  md:justify-end md:text-end">
              <div>
                {Experience.map((item) => (
                  <div key={item.id}
                    className="mb-10 text-center ">
                    <h2 className="text-[#081e21] font-[700] text-[32px]">
                      <CountUp start={item.start} end={item.end} duration={item.duration} suffix={item.suffix} />
                    </h2>
                    <h3 className="text-[#081e21] font-[600] text-[18px]">
                      {item.info}
                    </h3>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero