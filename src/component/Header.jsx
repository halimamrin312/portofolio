import profilePicture from '../../src/assets/almet.jpg'

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
                            <p>I'm an Informatics Engineering student at Lancang Kuning University in Pekanbaru, Indonesia, passionate about web development. With skills in HTML, CSS, JavaScript, Laravel, and React JS, I've worked on projects like event management systems and e-commerce platforms. I've also gained hands-on experience in hardware maintenance and customer service as a freelance technician and university labor assistant. Continuously learning through workshops and certifications, I'm adept at communication, teamwork, and time management. Outside of academics, I enjoy music, gaming, and drawing. I'm driven to contribute to innovative projects and teams, always seeking growth opportunities.</p>
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
                            <a href="https://www.linkedin.com/in/halim-amrin/" ><LuLinkedin size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="https://www.github.com/halimamrin312" ><LuGithub size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="https://wa.me/+6289620835220" ><LuPhone size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="https://www.instagram.com/myaww_._/" ><LuInstagram size={20} /></a>
                        </div>
                        <div className='px-6'>
                            <a href="mailto:Halimamrin080@gmail.com" ><LuMail size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header