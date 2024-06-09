import profilePicture from '../../public/assets/almet.jpg'

import { LuInstagram } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

function Header() {
    return (
        <header>
            <div className=' h-screen flex justify-center items-center'>
                
                <div className=' w-2/3 grid gap-10'>

                    <div className='grid place-content-center'>
                        <img src={profilePicture} alt="Foto Profil" className='w-32 h-32 rounded-full' />
                    </div>
                    <div className='text-center'>
                        <p className='font-bold'>MUHAMMAD HALIM AMRIN</p>
                        <p >Front-End Developer</p>
                        <div className='text-justify'>
                        <p>I am a fourth-semester student with a strong passion for coding and software development. I have experience in building mobile applications with Flutter and developing websites using CodeIgniter and Laravel. I am committed to continuous learning and improving my technical skills.</p>
                        </div>
                    </div>
                    
                    <div className=''>
                        <div className='grid grid-cols-4 text-center font-bold border-b border-b-black'>
                            <p>Name</p>
                            <p>Date Of Birth</p>
                            <p>Gender</p>
                            <p>City</p>
                        </div>
                        <div className='grid grid-cols-4 text-center'>
                            <p>Muhamamd Halim Amrin</p>
                            <p>23 March 2004</p>
                            <p>Man</p>
                            <p>Pekanbaru City</p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-6'>
                            <a href="#" ><LuMail size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="https://wa.me/+6289620835220" ><LuPhone size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="#" ><LuInstagram size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="#" ><LuLinkedin size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="#" ><LuGithub size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header