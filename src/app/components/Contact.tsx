import { contactInfo } from "./data";

export default function Contact() {
    return (
        <div className="grid grid-cols-1 place-items-center gap-[20px] m-[50px] mt-[60px]" id="contact">
            <h2 className="text-center text-[28px] font-bold text-[var(--blue-crayola)]">Contact Me</h2>
        <section className="grid grid-cols-3 gap-[20px] rounded-[20px] border-[var(--blue-crayola)] border-2 p-[20px] ">
            {contactInfo.map((contact, index) =>(
                <a key={index} href={contact.url} className="rounded-[20px] w-[120px]" target="_blank">
                    <img alt={contact.alt} src={contact.src}/>
                </a>
            ))}
        </section>
        </div>
    );
}