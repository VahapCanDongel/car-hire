import "../styles/Services.css";

export default function Services() {
  return (
    <div className="container">
      <div className="text-[35px] font-bold flex flex-col justify-center items-center sm:text-[20px]">
        Our services
        <div className="text-[40px] sm:text-[23px]">
          You can quickly & easily hire your desired car.
        </div>
      </div>

      <div className="flex gap-10 my-10 sm:flex-col">
        <div className="card">
          <div className="shape">
            <svg
              width="80"
              height="80"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-6.933 12.481-3.274-3.274 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5.702 6.84Z"></path>
              <path d="M4 22h11v-2H4V8H2v12c0 1.103.897 2 2 2Z"></path>
            </svg>
          </div>
          <div className="card-title">Select</div>
          <p className="card-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quasi?
          </p>
        </div>

        <div className="card">
          <div className="shape">
            <svg
              width="80"
              height="80"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C7.59 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.03-5.56 8-12 0-4.411-3.589-8-8-8Zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"></path>
            </svg>
          </div>
          <div className="card-title">Pick up</div>
          <p className="card-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quasi?
          </p>
        </div>

        <div className="card">
          <div className="shape">
            <svg
              width="80"
              height="80"
              className="fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6.72 7.2a4.8 4.8 0 1 1 5.4 4.764V18.6a.6.6 0 1 1-1.2 0v-6.636A4.8 4.8 0 0 1 6.72 7.2Zm2.99 10.29a.6.6 0 0 1-.493.69c-.854.141-1.536.354-1.986.591a1.59 1.59 0 0 0-.444.318.36.36 0 0 0-.068.108v.004l.002.01a.175.175 0 0 0 .02.04.74.74 0 0 0 .173.18c.198.155.522.323.976.473.9.3 2.184.497 3.629.497 1.444 0 2.727-.196 3.628-.497.454-.151.778-.318.976-.474a.741.741 0 0 0 .175-.18.17.17 0 0 0 .018-.04l.003-.01v-.004a.362.362 0 0 0-.069-.108 1.58 1.58 0 0 0-.444-.317c-.451-.237-1.132-.45-1.986-.591a.6.6 0 1 1 .197-1.183c.924.152 1.742.393 2.348.712.553.292 1.154.772 1.154 1.492 0 .511-.313.902-.653 1.172-.348.274-.816.496-1.34.67-1.053.352-2.47.558-4.007.558-1.538 0-2.955-.206-4.008-.558-.524-.174-.992-.396-1.34-.67-.34-.27-.652-.66-.652-1.172 0-.719.6-1.2 1.153-1.492.606-.319 1.424-.56 2.348-.712a.6.6 0 0 1 .69.493Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="card-title">Return</div>
          <p className="card-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            quasi?
          </p>
        </div>
      </div>
    </div>
  );
}
