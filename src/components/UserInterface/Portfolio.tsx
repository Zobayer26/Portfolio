import { useEffect, useState } from "react"
import { portfolios } from "../../utils/PortfolioData"
import Container from "../Container"
import Modal from "./Modal"


const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const [portfolioData, setPortfolioData] = useState(portfolios)
    const [selectTab, setSelectTab] = useState<string>('all')
    const [showModal, setShowModal] = useState(false)
    const [activeId, setActiveId] = useState('')


    const HandleLoad = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = (id:string) => {
        setShowModal(true)
        setActiveId(id)
    }
    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolioData(portfolios)
        }
        if (selectTab === 'Frontend') {
            const filterData = portfolios.filter(item => item.category === 'Frontend')
            setPortfolioData(filterData)
        }
        if (selectTab === 'Full-stack') {
            const filterData = portfolios.filter(item => item.category === 'Full-stack')
            setPortfolioData(filterData)
        }
        if (selectTab === 'Games') {
            const filterData = portfolios.filter(item => item.category === 'Games')
            setPortfolioData(filterData)
        }
    }, [selectTab])
    return (
        <section id="portfolio">
            <Container>
                <div className="flex items-center justify-between flex-wrap mb-7  ">
                    <div className="mb-7 sm:mb-0">
                        <h3 className=" text-[34px]  text-[#081e21] font-[700]">My Recent projects</h3>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setSelectTab('all')}
                            className="text-[#193256] border border-solid border-[#193256]
                         py-2 px-4 rounded hover:bg-[#193256] hover:text-white  ease-in duration-150">All

                        </button>
                        <button onClick={() => setSelectTab('Frontend')}
                            className="text-[#193256] border border-solid border-[#193256]
                         py-2 px-4 rounded hover:bg-[#193256] hover:text-white  ease-in duration-150">Frontend

                        </button>
                        <button onClick={() => setSelectTab('Full-stack')}
                            className="text-[#193256] border border-solid border-[#193256]
                         py-2 px-4 rounded hover:bg-[#193256] hover:text-white ease-in duration-150">Full Stack
                        </button>
                        <button onClick={() => setSelectTab('Games')}
                            className="text-[#193256] border border-solid border-[#193256]
                         py-2 px-4 rounded hover:bg-[#193256] hover:text-white ease-in duration-150">Games
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                    {portfolioData?.slice(0, nextItems)?.map((item) => (
                        <div key={item.id} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000"
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative  z-10">
                           <div className=" w-1/3 bg-orange-400 text-white font-[600] text-center rounded-md ">
                                {item.type}
                            </div>
                            <figure>
                                <img className="rounded-md"
                                    src={item.imgUrl} alt="" />
                            </figure>
                            <div className="w-full h-full  bg-[#8873ef] absolute top-0 left-0 bg-opacity-40 
                            z-20  hidden group-hover:block ">
                                <div className=" w-full h-full flex items-center justify-center" >
                                    <button onClick={()=>showModalHandler(item.id)} 
                                     className=" text-white px-4 py-2  hover:bg-[#193256] bg-[#081e21]
                                     rounded ease-in duration-200 font-[500]"
                                    >See Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    {
                        nextItems < portfolioData.length && portfolios.length > 6 &&
                        <button onClick={HandleLoad} className=" text-white px-4 py-2 
                          hover:bg-[#193256] bg-[#081e21] rounded ease-in duration-200 
                          font-[500]" >Load More
                        </button>
                    }
                </div>
            </Container>
            {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
        </section>
    )
}

export default Portfolio