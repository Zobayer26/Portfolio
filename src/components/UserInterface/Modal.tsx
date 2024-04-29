import { portfolios } from "../../utils/PortfolioData"

type ModalType = {
    activeId: string,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalType> = ({ activeId, setShowModal }) => {

    const portfolio = portfolios.find(item => item.id === activeId)

    return (
        <div className=" w-full h-full fixed top-0 left-0 z-10 bg-[#081e21] bg-opacity-40">
            <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20  bg-white 
            rounded-md transform -translate-x-1/2  -translate-y-1/2 p-5">
                <div>
                    <figure>
                        <img src={portfolio?.imgUrl} alt="" />
                    </figure>
                </div>
                <div>
                    <h2 className="text-2xl text-[#081e21] font-[700] my-5">
                        {portfolio?.title}
                    </h2>
                    <p className=" text-[15px] leading-7 text-[#193256] text-justify">
                        {portfolio?.description}
                    </p>
                    <div className="mt-5 flex items-center gap-3 flex-wrap">
                        <h4 className="text-[#081e21] text-[600] text-[18px]">
                            Technologies :
                        </h4>
                        {portfolio?.technologies.map((item, index) => (
                            <span key={index}
                                className="bg-gray-400 py-1 px-2 rounded-md text-[14px] leading-0"
                            >{item}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-8">
                    <a href={portfolio?.siteUrl}>
                        <button className="text-white py-2 px-4 my-8 rounded-md font-[500] 
                        bg-[#8873ef] hover:bg-[#081e21]  ease-in duration-300">
                        Live Site
                        </button>    
                    </a>
                    <a href={portfolio?.github}>
                        <button className="text-white py-2 px-4 my-8 rounded-md font-[500] 
                        bg-[#8873ef] hover:bg-[#081e21]  ease-in duration-300">
                        GitHub
                        </button>    
                    </a>
                    </div>
                </div>
                <button  onClick={()=>setShowModal(false)}
                className="w-[28px] h-[28px] bg-[#081e21] text-white absolute top-[27px] 
                right-[27px] text-[25px] flex items-center justify-center rounded-sm 
                 leading-0 cursor-pointer hover:bg-[#193256] ease-in duration-200  ">
                    &times;
                </button>
            </div>

        </div>
    )
}

export default Modal