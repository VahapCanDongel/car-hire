import "../styles/VehiclesInformation.css"

export default function VehiclesInformation() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="section-title">
                    Vehicle Models
                </div>
                <div className="section-subtitle">Explore our rental fleet</div>
                <p className="w-[550px] text-center text-gray-500 sm:w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia unde officia culpa earum praesentium reiciendis fuga quas eum eaque?</p>
            </div>

            <div className="flex justify-between sm:flex-col sm:items-center">

                <div className="flex flex-col gap-8">
                    <button className="vehilce-button">BMW 1 Series</button>
                    <button className="vehilce-button">VW Golf GTI</button>
                    <button className="vehilce-button">Mercedes-Benz CLA</button>
                    <button className="vehilce-button">VW Polo GTD</button>
                </div>

                <img src="https://www.bmw.co.za/content/dam/bmw/marketZA/bmw_co_za/images/bmw-finance/118i-msport-offer-cosy-image.png" />


            </div>
        </div>
    )
}