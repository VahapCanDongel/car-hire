import AccordionItem from "../components/AccordionItem"

export default function Faq() {
    return (
        <div className="bg-zinc-100 p-20 flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center w-full flex-col">
                <div className="text-[25px] font-semibold">FAQ</div>
                <div className="text-[35px] font-bold sm:text-center">Frequently Asked Questions</div>

                <p className="w-[600px] text-center text-gray-600 sm:w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem sunt voluptatem maiores adipisci vel possimus quod eveniet quisquam non?</p>
            </div>



            <div className="w-2/4 border sm:w-[360px] shadow-2xl">
                <AccordionItem title="1. What is special about comparing rental car deals?" content="Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies." />
                <AccordionItem title="2. How do I find the car rental deals?" content="You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions." />
                <AccordionItem title="3. How do I find such low rental car prices?" content="Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices." />
            </div>

        </div>
    )
}