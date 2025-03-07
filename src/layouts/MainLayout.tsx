import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className="bg-gray-900 flex justify-center items-center min-h-screen">
            <main>{children}</main>
        </div>
    );
}


export default MainLayout