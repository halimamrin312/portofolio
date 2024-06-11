// import '../style/Navbar.css'
// import '../../public/assets/image1.png'
import CustomLink from './NavbarA'

function Navbar() {
    const file = 'assets/image1.png'
    const downloadFileAtUrl = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <nav className="w-screen h-16 text-center fixed bg-slate-900 text-white flex flex-row justify-between items-center px-10 ">
            <div>
                <p>My PortoFolio</p>
            </div>
            <div className=" grid grid-cols-1 gap-10 ">
                <CustomLink href="#project">My Project</CustomLink>
                {/* <CustomLink href="#experience">Experience</CustomLink>
                <CustomLink href="#certifactes">Certificates</CustomLink> */}
            </div>
 
            <div>
                {/* <button onClick={()=>{downloadFileAtUrl(file)}}> */}
                <a href="https://drive.usercontent.google.com/download?id=1CRG8ZI-A96AriyN4TcPZ5_OusbtzuN65&export=download&authuser=0" className="text-slate-900 bg-yellow-400 px-2 py-2 ">Download CV</a>
                {/* </button> */}
            </div>
        </nav>
    )
}

export default Navbar