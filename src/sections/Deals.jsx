import "../styles/Deals.css";

export default function Deals() {
  return (
    <div className="deals-base">
      <img src="https://www.cargiant.co.uk/media/1wentceg/cg-hero.png?height=0&width=0&quality=&mode=Crop&center=0.5,0.5&bgcolor=" className="sm:hidden"/>

      <div className="flex justify-evenly items-center gap-8 w-full my-10 sm:flex-col sm:w-2/3">
        <div className="flex flex-col gap-8 w-[450px] sm:w-[400px] sm:justify-center sm:items-center">
          <div className="sm:w-[370px]">
            <div className="text-[23px] font-bold">Why Choose Us</div>
            <div className="text-[40px] font-bold sm:text-[35px]">
              We have the best valued deals for you!
            </div>
          </div>

          <p className="text-[18px] sm:w-[370px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            ab unde dolorum architecto quod aspernatur voluptatum iusto
            voluptates! Velit facilis recusandae quo doloribus omnis incidunt
            possimus sint soluta, doloremque est!
          </p>
          <button className="rounded-md p-2 w-[200px] text-white h-[55px] sm:w-[180px] sm:h-[50px] bg-orange-500">
            Find Details {">"}
          </button>
        </div>

        <div className="flex flex-col gap-8 sm:w-[370px]">
          <div className="deal-card">
            <div className="icon-container">
              <svg
                width="66"
                height="66"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.4 7.93a6.003 6.003 0 0 0 4.833 5.885c.077-.86.298-1.7.653-2.487C6.834 10.972 6.159 10.166 6 9.02h-.6v-.51h.56v-.52c0-.056 0-.112.004-.163H5.4v-.512h.614c.27-1.498 1.442-2.386 3.204-2.386.379 0 .708.037.982.102v.88a4.153 4.153 0 0 0-.978-.099c-1.102 0-1.845.56-2.08 1.503h2.3v.512H7.066c-.004.055-.004.117-.004.177v.506h2.38v.512H7.116c.142.723.562 1.236 1.206 1.475a7.8 7.8 0 0 1 5.964-3.735A6.002 6.002 0 0 0 2.4 7.929Zm19.2 6.6a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Zm-9.3 1.586c.083 1.002.896 1.782 2.357 1.874v.74h.648v-.745c1.51-.103 2.395-.888 2.395-2.028 0-1.038-.675-1.572-1.884-1.848l-.51-.12v-2.011c.647.072 1.06.416 1.158.894h1.138c-.084-.965-.935-1.72-2.297-1.802v-.74h-.648v.754c-1.291.124-2.17.878-2.17 1.946 0 .945.653 1.546 1.74 1.792l.43.102v2.136c-.665-.096-1.104-.451-1.203-.944H12.3Zm2.352-2.274c-.638-.144-.984-.437-.984-.879 0-.492.373-.863.99-.97v1.847h-.007l.001.002Zm.747 1.252c.774.174 1.131.456 1.131.956 0 .568-.444.96-1.224 1.032v-2.01l.093.022Z"></path>
              </svg>
            </div>

            <div className="card-body">
              <div className="font-semibold text-[23px]">
                All Inclusive Pricing
              </div>
              <p className="text-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                corrupti.
              </p>
            </div>
          </div>

          <div className="deal-card ">
            <div className="icon-container">
              <svg
                width="66"
                height="66"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m20.772 13.155-1.368-4.104A2.995 2.995 0 0 0 16.559 7H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 15v3c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 22 18v-3c0-.831-.507-1.542-1.228-1.845ZM7.441 9h9.117a1 1 0 0 1 .949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684ZM5.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 18Zm13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM5.277 5c.347.595.985 1 1.723 1 .738 0 1.376-.405 1.723-1h6.555c.346.595.984 1 1.722 1s1.376-.405 1.723-1H17V3h1.723c-.347-.595-.985-1-1.723-1-.738 0-1.376.405-1.723 1H8.723C8.376 2.405 7.738 2 7 2c-.738 0-1.376.405-1.723 1H7v2H5.277Z"></path>
              </svg>
            </div>

            <div className="card-body">
              <div className="font-semibold text-[23px]">
                Quick Response and Support
              </div>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, a.
              </p>
            </div>
          </div>

          <div className="deal-card">
            <div className="icon-container">
              <svg
                width="66"
                height="66"
                fill="#ffffff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm0 2c3.213 0 5.982 1.908 7.254 4.648a7.801 7.801 0 0 1-.895-.498c-.409-.258-.873-.551-1.46-.772-.669-.255-1.4-.378-2.234-.378-.834 0-1.565.123-2.234.377-.587.223-1.051.516-1.472.781-.378.237-.703.443-1.103.594C9.41 8.921 8.926 9 8.33 9c-.595 0-1.079-.079-1.524-.248-.4-.151-.728-.358-1.106-.598-.161-.101-.34-.208-.52-.313C6.587 5.542 9.113 4 12 4Zm0 16c-4.411 0-8-3.589-8-8 0-.81.123-1.59.348-2.327.094.058.185.11.283.173.411.26.876.554 1.466.776.669.255 1.399.378 2.233.378.833 0 1.564-.123 2.235-.377.587-.223 1.051-.516 1.472-.781.378-.237.703-.443 1.103-.595.445-.168.929-.247 1.525-.247.596 0 1.08.079 1.525.248.399.15.725.356 1.114.602.409.258.873.551 1.46.773.363.138.748.229 1.153.291.049.357.083.717.083 1.086 0 4.411-3.589 8-8 8Z"></path>
                <path d="M8.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                <path d="M15.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              </svg>
            </div>

            <div className="card-body">
              <div className="font-semibold text-[23px]">
                High Customer Satisfaction
              </div>
              <p className="text-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
