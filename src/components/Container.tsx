import React from "react"

type ContainerType = {
    children: React.ReactNode
}

const Container: React.FC<ContainerType> = ({ children }) => {
    return (
        <div className="lg:w-[1170px] md:w-[800px] sm:w-[550px] w-[400px] px-5 mx-auto">
            {children}
        </div>
    )
}

export default Container