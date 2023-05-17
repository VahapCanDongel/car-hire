export default function Testimonials() {
    return (
        <div className="bg-zinc-100 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center flex-col my-10">
                <div className="text-[25px] font-semibold">Reviewed By People</div>
                <div className="text-[35px] font-bold">Client's Testimonials</div>
                <p className="w-[500px] text-center my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae reprehenderit at qui eveniet recusandae praesentium accusantium quod debitis! Ullam!</p>
            </div>

            <div className="flex gap-8 justify-center">
                <div className="bg-red-400 w-[600px] h-[280px] rounded-sm flex justify-center items-center flex-col relative">
                    <p className="w-[450px] text-[20px] font-semibold mt-16">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique hic nostrum distinctio vel! Quidem, ad officiis. Eligendi provident nam, soluta aspernatur minima quas consectetur, quasi magnam molestiae maxime optio?"</p>

                    <div className="flex justify-between w-3/4">
                        <div>
                            <div className="font-bold text-[22px] mt-4">John Doe</div>
                            <div>Belgrade</div>
                        </div>
                    </div>
                    <div className="font-bold text-orange-400 text-[240px] font-space mt-auto absolute right-0 top-24">”</div>
                </div>

                <div className="bg-white w-[600px] h-[300px] rounded-sm">

                </div>
            </div>



        </div>
    )
}