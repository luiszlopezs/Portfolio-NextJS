export default function Certificates() {
    return (
        <div >
            <h2 className="text-[var(--blue-crayola)] text-center text-[32px] font-bold mb-[20px]">Certificates</h2>

            <div className="my-[40px] grid grid-cols-4 items-center justify-center relative max-w-[1000px] h-[400px] mx-auto gap-[40px]">

{/* Fondo azul borroso */}
                <div className="inset-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[var(--jordy-blue)] rounded-[20px] blur-[40px]  z-[1]" />

                <div className="relative bg-[white]/70 p-[50px] rounded-[20px] z-[10] backdrop-blur-xs w-full h-full ">
                    <h2
                        id="certificates"
                        className="text-[28px] font-bold text-[var(--blue-crayola)] text-center">
                        python
                    </h2>
                </div>
                

                <div className="relative bg-[white]/70 p-[50px] rounded-[20px] z-[10] backdrop-blur-xs w-full h-full  drop-shadow-xl">
                    <h2
                        id="certificates"
                        className="text-[28px] font-bold text-[var(--blue-crayola)] text-center">
                        python
                    </h2>
                </div>
                
                
                
            </div>
        </div>
    );
}


