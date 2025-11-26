import { contactInfo } from "./data";

export default function Contact() {
    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] mt-[60px] mb-[40px] p-6 sm:mx-[40px] scroll-mt-[60px]" id="contact">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Contact Me</h2>
        <section className="grid grid-cols-3 gap-[10px] sm:gap-[20px] rounded-[20px] border-[var(--blue-crayola)] border-2 sm:p-[20px] ">
            {contactInfo.map((contact, index) =>(
                <a key={index} href={contact.url} className="rounded-[20px] sm:w-[120px] p-[10px]" target="_blank">
                    <img className="w-[80px] sm:w-[120px]" alt={contact.alt} src={contact.src}/>
                </a>
            ))}
        </section>
        </div>
    );
}