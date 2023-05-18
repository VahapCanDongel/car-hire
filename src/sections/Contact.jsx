export default function Contact() {
    return (
        <div className="flex w-full justify-center items-center min-h-[800px] bg-zinc-100 p-4">
            <div className="w-2/4 flex justify-between sm:flex-col sm:w-full sm:gap-12">

                <div className="flex flex-col gap-4">
                    <div className="text-[45px] font-bold w-[400px] sm:w-full sm:text-[35px] sm:text-center">
                        Need additional information?
                    </div>

                    <p className="w-[400px] sm:w-full">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>

                    <div className="sm:hidden">
                        <div className="font-semibold">0200 123 456</div>
                        <div className="font-semibold">carrental@email.com</div>
                        <div className="font-semibold">London</div>
                    </div>


                </div>


                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <label>Full Name <span className="text-red-500">*</span></label>
                        <input type="text" className="bg-gray-50 border p-4 w-[450px] sm:w-full" placeholder="E.g, John Doe" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Email <span className="text-red-500">*</span></label>
                        <input type="text" className="bg-gray-40 border p-4 w-[450px] sm:w-full" placeholder="youremail@example.com" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label>Tell us about it! <span className="text-red-500">*</span></label>
                        <textarea className="bg-gray-50 p-4 border w-[450px] h-[170px] resize-none sm:w-full" placeholder="Your message"></textarea>
                    </div>

                    <button className="bg-orange-500 w-full h-[65px]">Send Message</button>
                </div>

            </div>
        </div>
    )
}