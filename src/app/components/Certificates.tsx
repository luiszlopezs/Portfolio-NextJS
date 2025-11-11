export default function Certificates() {
    return (
        <div id="Certificates">
            <h2 className="text-[var(--blue-crayola)] text-center text-[32px] font-bold mt-[60px] mb-[40px]">Certificates</h2>

            <div className="my-[20px] flex flex-cols  items-stretch justify-center max-w-[1000px] mx-auto gap-[40px]">

                <div className=" flex-1 bg-[white]/60 p-[30px] rounded-[20px]  shadow-[0px_20px_25px_rgba(24_82_254_/_0.5)] hover:scale-[1.05]  duration-300">
                    <h2
                        id="certificates"
                        className=" text-[var(--blue-crayola)] text-center mb-[20px]">
                        Python Essentials 1  CISCO
                    </h2>
                    <a>
                        <img src="./certificadoACMpython.jpeg" alt="python certificate" className=" rounded-[10px]"/>
                    </a>
                </div>

            <div className=" flex-1 bg-[white]/60 p-[30px] rounded-[20px]  shadow-[0px_20px_25px_rgba(24_82_254_/_0.5)] hover:scale-[1.05]  duration-300">
                    <h2
                        id="certificates"
                        className="font-medium text-[var(--blue-crayola)] text-center mb-[20px]">
                        Python de 0 a 100 ACMUD
                    </h2>
                    <a href="https://thoth.acmud.org/certificates/cc5e9408-ca33-474c-8686-f9f1b12ddd11">
                        <img src="./certificadoACMpython.jpeg" alt="python certificate" className=" rounded-[10px]"/>
                    </a>
                </div>

                <div className="flex-1   bg-[white]/60 p-[30px] rounded-[20px]  shadow-[0px_20px_25px_rgba(24_82_254_/_0.5)] hover:scale-[1.05]  duration-300 ">
                    <h2
                        id="certificates"
                        className=" text-[var(--blue-crayola)] text-center mb-[20px]">
                        certificado de participacion ambiental
                    </h2>
                    <a>
                        <img src="./certificadoACMpython.jpeg" alt="python certificate" className=" rounded-[10px]"/>
                    </a>
                </div>
                
                
                
            </div>
        </div>
    );
}


