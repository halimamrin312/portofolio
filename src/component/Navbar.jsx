// import '../style/Navbar.css'
import './NavbarA'
import CustomLink from './NavbarA'

function Navbar() {
    return (
        <nav className="w-screen h-16 text-center fixed bg-slate-900 text-white flex flex-row justify-between items-center px-10 ">
            <div>
                <p>My PortoFolio</p>
            </div>
            <div className=" grid grid-cols-3 gap-10 ">
                <CustomLink href="#experience">Experience</CustomLink>
                <CustomLink href="#project">Project</CustomLink>
                <CustomLink href="#certifactes">Certificates</CustomLink>
            </div>

            <div>
                <a href="#" className="text-slate-900 bg-yellow-400 px-2 py-2 ">Download CV</a>
            </div>
        </nav>
    )
}

export default Navbar