// import portofolio1 from '../../public/assets/image1.png'

const CustomLink = ({ href, children,src }) => {
    return (

        <div className="min-w-80 max-w-80 min-h-40 max-h-auto  px-2 py-2 text-white bg-slate-700 ">
            <div className="h-full w-full text-center flex flex-col gap-5">
                <img src={src} alt="" className='bg-contain' />
                <div className=" w-auto transition ease-in-out delay-150 p-2 bg-slate-900 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 hover:text-black duration-300" >
                    <a href={href}>{children}</a>
                </div>

            </div>
        </div>
    )
}

export default CustomLink;