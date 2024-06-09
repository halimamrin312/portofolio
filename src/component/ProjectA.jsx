import portofolio1 from '../../public/assets/image1.png'

const CustomLink = ({ href, children }) => {
    return (

        <div className="min-w-80 h-80 font- px-2 py-2 text-white bg-slate-700">
            <div className="h-full w-full text-center flex flex-col-reverse">

                <div className="transition ease-in-out delay-150 p-2 bg-slate-900 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 hover:text-black duration-300" >
                    <a href={href}>{children}</a>
                </div>
            </div>
        </div>
    )
}

export default CustomLink;