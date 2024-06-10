import CustomLink from './ProjectA'

function Project() {
    return (
        <section id='project' className="h-auto p-10 bg-slate-900 text-white flex flex-col gap-10">
            <div className='text-center font-bold text-xl' >
                <p>MY PROJECT</p>
            </div>
            <div className='flex flex-wrap justify-between gap-10'>
                <CustomLink src="../../public/assets/image1.png" href="https://github.com/halimamrin312/manajementevent">MANAJEMEN EVENT</CustomLink>
                <CustomLink src="../../public/assets/image2.png" href="https://github.com/halimamrin312/portofolio">WEBSITE PORTOFOLIO</CustomLink>
                <CustomLink src="../../public/assets/image3.png" href="https://github.com/halimamrin312/RHD---Project">RHD</CustomLink>
                <CustomLink src="../../public/assets/image4.png" href="https://www.figma.com/proto/DYJmBTw9UhONRjLIFXLDkR/DuckGear?node-id=4-2&t=FghOWKRnyk4IFTCT-1">Duck-Gear</CustomLink>
            </div>


        </section>
    )
}

export default Project