import CustomLink from './ProjectA'
import img1 from '../../src/assets/image1.png'
import img2 from '../../src/assets/image2.png'
import img3 from '../../src/assets/image3.png'
import img4 from '../../src/assets/image4.png'

function Project() {
    return (
        <section id='project' className="h-auto p-10 bg-slate-900 text-white flex flex-col gap-10">
            <div className='text-center font-bold text-xl' >
                <p>MY PROJECT</p>
            </div>
            <div className='flex flex-wrap justify-between gap-10'>
{/* <<<<<<< HEAD */}
                <CustomLink src={img1} href="https://github.com/halimamrin312/manajementevent">MANAJEMEN EVENT</CustomLink>
                <CustomLink src={img2} href="https://github.com/halimamrin312/portofolio">WEBSITE PORTOFOLIO</CustomLink>
                <CustomLink src={img3} href="https://github.com/halimamrin312/RHD---Project">RHD</CustomLink>
                <CustomLink src={img4} href="https://www.figma.com/proto/DYJmBTw9UhONRjLIFXLDkR/DuckGear?node-id=4-2&t=FghOWKRnyk4IFTCT-1">Duck-Gear</CustomLink>
{/* ======= */}
                {/* <CustomLink src="../../public/assets/image1.png" href="https://github.com/halimamrin312/manajementevent">MANAJEMEN EVENT</CustomLink>
                <CustomLink src="../../public/assets/image2.png" href="https://github.com/halimamrin312/portofolio">WEBSITE PORTOFOLIO</CustomLink>
                <CustomLink src="../../public/assets/image3.png" href="https://github.com/halimamrin312/RHD---Project">RHD</CustomLink>
                <CustomLink src="../../public/assets/image4.png" href="https://www.figma.com/proto/DYJmBTw9UhONRjLIFXLDkR/DuckGear?node-id=4-2&t=FghOWKRnyk4IFTCT-1">Duck-Gear</CustomLink> */}
{/* >>>>>>> 54738e3d58b32ffe50690746a92ae7c8576e16ad */}
            </div>


        </section>
    )
}

export default Project




























































