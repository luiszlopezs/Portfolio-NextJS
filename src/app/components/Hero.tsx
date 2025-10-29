export default function Hero() {
    return (
        <section className="text-center my-[50px]    flex flex-row justify-center items-center max-h-[500px] m-[40px] " id="hero">
            <div className="bg-[url('/image.png')] bg-contain bg-no-repeat bg-center w-[500px] h-[500px]"></div>
            <div className="max-w-[500px]">
                <h2 className="text-[28px] font-bold text-[var(--blue-crayola)]">Acerca de Mi</h2>
                <p >
                    Actualmente estudio Ingeniería de Sistemas y tengo 18 años. <br />
                    Me interesa aprender desarrollo frontend, por eso estoy tomando este
                    curso.
                </p>
            </div>
            

        </section>
    );
}
