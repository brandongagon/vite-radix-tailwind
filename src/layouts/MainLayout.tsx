import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div>
            <p>Main Layout File</p>
            <main>{children}</main>
        </div>
    );
}


export default MainLayout