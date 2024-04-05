import Container from "../Container"


const Services = () => {
    return (
        <section id="services">
            <Container>
                <div className="lg:pt-5">
                    <div className=" text-center">
                        <h2 className="text-[#081e21] font-[800] text-[38px] mb-5">
                            What do i help
                        </h2>
                        <p className="lg:max-w-[600px] lg:mx-auto font-[500] text-[#081e21]
                         text-[16px] leading-7">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consequuntur ex illo perferendis, optio dolorum nesciunt
                            quia tempore deleniti praesentium repellendus at animi facere, voluptatum molestiae? Iusto dicta rem vitae temporibus?
                        </p>
                    </div>
                    <div className=" flex flex-col justify-center sm:py-12">
                        <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                            <div className="relative text-gray-700 antialiased text-sm font-semibold">
                                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full
                                 left-1/2  transform -translate-x-1/2"></div>
                                {/* map */}
                                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                                    <div className="flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-start w-full mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pr-8">
                                                <div data-aos="fade-right"
                                                    data-aos-duration="1200"
                                                    className=" bg-white hover:bg-[#8873ef] p-4 rounded shadow 
                                                     cursor-pointer text-[#193256] hover:text-white 
                                                     font-[500] hover:font-[400] ease-in duration-300 ">
                                                    <h3 className=" mb-3 text-xl">
                                                        Frontend Development
                                                    </h3>
                                                    <p className=" text-[15px] leading-7  text-justify">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                                                        nemo aut porro dolor odit voluptatibus magni suscipit quis aliquid repellendus
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 
                                         absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex 
                                          items-center justify-center  ">
                                            <figure>
                                                <img src="" alt="" />
                                            </figure>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                                    <div className="flex items-center flex-col sm:flex-row">
                                        <div className="flex justify-end w-full mx-auto items-center">
                                            <div className="w-full sm:w-1/2 sm:pl-8">
                                                <div data-aos="fade-left"
                                                    data-aos-delay="50"
                                                    data-aos-duration="1300"
                                                    className=" bg-white hover:bg-[#8873ef] p-4 rounded shadow 
                                                     cursor-pointer text-[#193256] hover:text-white 
                                                     font-[500] hover:font-[400] ease-in duration-300 ">
                                                    <h3 className=" mb-3 text-xl">
                                                        Backend Development
                                                    </h3>
                                                    <p className=" text-[15px] leading-7  text-justify">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                                                        nemo aut porro dolor odit voluptatibus magni suscipit quis aliquid repellendus
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className=" rounded-full bg-[#8873ef] border-white border-4 w-10 h-10 
                                         absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex 
                                          items-center justify-center  ">
                                            <figure>
                                                <img src="" alt="" />
                                            </figure>
                                        </div> */}
                                    </div>
                                </div>
                                {/* map */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services