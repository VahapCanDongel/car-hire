import "../styles/VehiclesInformation.css"

export default function VehiclesInformation() {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-zinc-50 py-8">
            <div className="flex flex-col justify-center items-center">
                <div className="section-title">
                    Vehicle Models
                </div>
                <div className="section-subtitle">Explore our rental fleet</div>
                <p className="w-[550px] text-center text-gray-500 sm:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia unde officia culpa earum praesentium reiciendis fuga quas eum eaque?</p>
            </div>

            <div className="flex justify-between sm:flex-col sm:items-center">

                <div className="flex flex-col gap-8 my-6">
                    <button className="vehilce-button">BMW 1 Series</button>
                    <button className="vehilce-button">VW Golf GTI</button>
                    <button className="vehilce-button">Mercedes-Benz CLA</button>
                    <button className="vehilce-button">VW Polo GTD</button>
                </div>

                <img src="https://www.bmw.co.za/content/dam/bmw/marketZA/bmw_co_za/images/bmw-finance/118i-msport-offer-cosy-image.png" />


                <div className="border-[1px] border-gray-400 rounded-sm p-4 flex flex-col justify-between sm:gap-6">
                    <div className="bg-orange-200 p-4 font-bold rounded-sm shadow-xl shadow-orange-100 text-center">
                        £45 / per day
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>Brand: BMW</div>
                        <div>Model: 1 Series 116d</div>
                        <div>Transmition: Automatic</div>
                        <div>Doors: 5</div>
                        <div>Fuel: Diesel</div>
                    </div>

                    <button className="vehilce-button bg-orange-400 h-[50px]">Reserve</button>
                </div>

            </div>
        </div>
    )
}