import Container from "../Container"

const Contact = () => {
    return (
        <section id="contact" className=" mt-8">
            <Container>
                <h2 className=" text-[#081e21] font-[700] text-[40px] mb-4 "> Get in touch</h2>
                <div className=" md:flex justify-between items-center">
                    <div className=" w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe title="google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.929068563833!2d90.35764552599241!3d23.87663222366842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712310379241!5m2!1sen!2sbd"
                            className="w-full h-full border-0 " allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className=" w-full  mt-8  md:mt-0 md:w-1/2
                    sm:h-[450px] lg-flex items-center bg-indigo-300 px-4
                   lg:px-8 py-8">
                        <form className="w-full">
                            <div className="mb-5">
                                <input className="w-full p-3 focus:outline-none rounded"
                                    type="text" placeholder="Enter your name"

                                />
                            </div>
                            <div className="mb-5">
                                <input className="w-full p-3 focus:outline-none rounded"
                                    type="text" placeholder="Enter your email"

                                />
                            </div>
                            <div className="mb-5">
                                <input className="w-full p-3 focus:outline-none rounded"
                                    type="text" placeholder="Subject"

                                />
                            </div>
                            <div className="mb-5">
                                <textarea rows={3}
                                    className="w-full p-3 focus:outline-none rounded"
                                    placeholder="Write your thought"
                                />
                            </div>
                            <button className="w-full p-3  rounded focus:outline-none bg-[#193256]
                            text-white hover:bg-[#081e21] ease-in duration-150">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact