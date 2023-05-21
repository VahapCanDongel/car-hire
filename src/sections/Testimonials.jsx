import Testimonial from "../components/Testimonial";

export default function Testimonials() {
    return (
        <div className="bg-white flex flex-col justify-center items-center min-h-[700px] sm:py-10">
            <div className="w-full flex justify-center items-center flex-col ">
                <div className="text-[25px] font-semibold">Reviewed By People</div>
                <div className="text-[35px] font-bold">Client's Testimonials</div>
                <p className="w-[500px] text-center text-gray-600 sm:w-[400px] mb-20 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae
                    reprehenderit at qui eveniet recusandae praesentium accusantium quod
                    debitis! Ullam!
                </p>
            </div>



            <div className="flex gap-8 justify-center sm:flex-col">
                <Testimonial user_name={"John Doe"} user_location={"London"} user_review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto nobis voluptates non quo laborum eum reiciendis, corrupti rerum labore minus vitae vero, est ut corporis consequuntur tempore nisi debitis?"} />
                <Testimonial user_name={"Steven Java"} user_location={"Manchester"} user_review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto nobis voluptates non quo laborum eum reiciendis, corrupti rerum labore minus vitae vero, est ut corporis consequuntur tempore nisi debitis?"} />
            </div>


        </div>
    );
}
