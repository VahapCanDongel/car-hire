import "../styles/Deals.css"

export default function Deals() {
    return (
        <div className="deals-base">

            <div className="flex justify-evenly items-center gap-8 w-full">
                <div className="flex flex-col gap-8 w-[450px]">
                    <div>
                        <div className="text-[23px] font-bold">Why Choose Us</div>
                        <div className="text-[40px] font-bold">We have the best valued deals for you!</div>
                    </div>

                    <p className="text-[18px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ab unde dolorum architecto quod aspernatur voluptatum iusto voluptates! Velit facilis recusandae quo doloribus omnis incidunt possimus sint soluta, doloremque est!</p>
                    <button className="rounded-md p-2 w-[200px] text-white h-[55px] sm:w-[180px] sm:h-[50px] bg-orange-500">Find Details {">"}</button>
                </div>


                <div className="w-/4 flex flex-col gap-8">

                    <div className="deal-card">
                        <div className="icon-container">

                        </div>

                        <div className="card-body">
                            <div className="font-semibold text-[23px]">
                                All Inclusive Pricing
                            </div>
                            <p className="text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, corrupti.</p>
                        </div>
                    </div>


                    <div className="deal-card ">
                        <div className="icon-container">

                        </div>

                        <div className="card-body">
                            <div className="font-semibold text-[23px]">
                                All Inclusive Pricing
                            </div>
                            <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, a.</p>
                        </div>
                    </div>

                    <div className="deal-card">
                        <div className="icon-container">

                        </div>

                        <div className="card-body">
                            <div className="font-semibold text-[23px]">
                                All Inclusive Pricing
                            </div>
                            <p className="text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, corrupti.</p>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}