export default function Testimonials(){
    return (
        <div className="bg-zinc-50 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center flex-col my-10">
                <div className="text-[25px] font-semibold">Reviewed By People</div>
                <div className="text-[35px] font-bold">Client's Testimonials</div>
                <p className="w-[500px] text-center my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae reprehenderit at qui eveniet recusandae praesentium accusantium quod debitis! Ullam!</p>
            </div>

            <div className="flex gap-8 justify-center">
                <div className="bg-white w-[600px] h-[300px] rounded-sm flex justify-center items-center flex-col">
                    <p className="w-[450px] text-[20px] font-semibold">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic nostrum distinctio vel! Quidem, ad officiis. Eligendi provident nam, soluta aspernatur minima quas consectetur, quasi magnam molestiae maxime optio?"</p>

                    <div>
                        <img src="https://media.glamourmagazine.co.uk/photos/626c123bd9c995304913c7aa/3:2/w_1920,h_1280,c_limit/MILLIE%20BOBBY%20BROWN%20290422%20GettyImages-1181658863b.jpg" className="rounded-full w-28 h-28"/>
                    </div>
                
                </div>

                <div className="bg-white w-[600px] h-[300px] rounded-sm">

                </div>
            </div>
           


        </div>
    )
}