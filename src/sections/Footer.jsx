export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center min-h-[450px]">
      <div className="w-3/4 p-4 flex justify-between sm:flex-col sm:gap-6 ">

        <div className="flex flex-col gap-6 text-center sm:gap-2 sm:my-4 sm:justify-center sm:items-center">
          <div className="font-semibold text-[25px]">Car Rental</div>
          <p className="text-gray-600 w-[400px]">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="font-semibold">0200 123 456</div>
          <div className="font-semibold">carrental@email.com</div>
        </div>

        <div>
          <div className="font-semibold text-[25px] text-center sm:my-4 sm:justify-center sm:items-center">Company</div>
          <ul className="flex flex-col gap-5 mt-2 text-center sm:gap-2">
            <li>London</li>
            <li>Manchester</li>
            <li>Wales</li>
            <li>Cantebury</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 text-center sm:my-4 sm:justify-center sm:items-center">
          <div className="font-semibold text-[25px]">Working Hours</div>
          <div>Mon - Fri 9:00AM - 9:00PM</div>
          <div>Sat: 9:00AM - 7:00PM</div>
          <div>Sun: Closed</div>
        </div>

        <div className="flex flex-col gap-2 sm:text-center sm:justify-center sm:items-center">
            <div className="font-semibold text-[25px]">Subscription</div>
            <p className="w-[300px]">Subscribe to get informed with latest informations and deals. </p>
            <input type="email" placeholder="Email" className="w-[290px] border p-3 outline-none focus:outline-black focus:border-none"/>
            <button className="w-[290px] bg-orange-500 h-[55px] rounded-none">Submit</button>
        </div>


      </div>
    </div>
  );
}
