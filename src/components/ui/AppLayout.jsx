import { Header } from './Header'
import { Outlet } from './Outlet'
import { Footer } from './Footer'

export const AppLayout = () =>{
    return(
        <>
        <Header />
        <Outlet />
        <Footer />

        
        </>
    )
}