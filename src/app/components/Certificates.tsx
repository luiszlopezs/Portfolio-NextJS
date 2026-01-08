import {certificates} from "./data";

export default function Certificates() {
    return (
        <div id="certificates" className="mt-[60px] mb-[40px] p-6 sm:mx-[40px] scroll-mt-[60px]">
            <h2 className="text-[var(--blue-crayola)] text-center text-[28px] font-bold ">Certificates</h2>

            <div className="my-[20px] flex flex-col sm:flex-row  items-stretch justify-center max-w-[1000px] mx-auto gap-[40px]">

            {certificates.map((certificate, index) => (
                <div key={index} className=" flex-1 bg-[white]/60 p-[30px] rounded-[20px]  shadow-[0px_20px_25px_rgba(24_82_254_/_0.5)] hover:scale-[1.05]  duration-300">
                    <h2
                        className="font-medium text-[var(--risd-blue)] text-center mb-[20px]">
                        {certificate.title}
                    </h2>
                    <a href={certificate.href} target="_blank" >
                        <img src={certificate.src} alt={certificate.alt} className=" rounded-[10px]"/>
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
}


