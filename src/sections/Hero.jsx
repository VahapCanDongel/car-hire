import '../styles/Hero.css'


export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="hero">
        <div>
          <div className='p-4'>
            <div className="font-bold text-[18px]">Plan your trip now.</div>

            <div className="text-[50px] mb-6 font-extrabold sm:text-[35px]">
              We are different, you{" "}
              <span className="text-orange-400">save</span> different!
            </div>
          </div>

          <div className="flex flex-col w-3/3 gap-10 sm:w-full">
            <p className="text-[18px] sm:p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              voluptatum eos sit? Tenetur, libero? Esse, quis ipsa sint
              accusamus, perferendis provident nobis necessitatibus asperiores
              inventore distinctio voluptas ducimus similique? Autem.
            </p>
            <div className="flex gap-6">
              <button className="bg-orange-500 shadow-orange-300 shadow-lg flex justify-center items-center gap-6 text-white">
                Book
                <svg
                  width="24"
                  height="24"
                  className="fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845ZM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6ZM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16Zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16Z"></path>
                </svg>
              </button>
              <button className='bg-gray-700 text-white'>Catalogue</button>
            </div>
          </div>
        </div>

        <img
          src="https://www.bmw.co.za/content/dam/bmw/marketZA/bmw_co_za/images/bmw-finance/118i-msport-offer-cosy-image.png"
          className="bg-orange-400 rounded-tl-[400px] rounded-br-[200px] p-4 sm:hidden"
        />
      </div>
    </div>
  );
}
