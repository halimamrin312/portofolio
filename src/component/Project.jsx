import CustomLink from './ProjectA'

function Project() {
    return (
        <section id='project' className="h-auto p-10 bg-slate-900 text-white flex flex-col gap-10">
            <div className='text-center font-bold text-xl' >
                <p>MY PROJECT</p>
            </div>
            <div className='flex flex-wrap justify-between gap-10'>
                <CustomLink href="#">MANAJEMEN EVENT</CustomLink>

                <CustomLink href="#">WEBSITE PORTOFOLIO</CustomLink>

                <CustomLink href="#">RHD</CustomLink>
            </div>


        </section>
    )
}

export default Project