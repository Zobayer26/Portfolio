import React from "react"

type ContainerType = {
    children: React.ReactNode
}

const Container: React.FC<ContainerType> = ({ children }) => {
    return (
        <div className="w-[1170px] px-5 mx-auto">
            {children}
        </div>
    )
}

export default Container