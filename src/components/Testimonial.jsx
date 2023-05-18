export default function Testimonial() {
  return (
    <div>
      <div className="border w-[600px] p-10 rounded-sm flex justify-center items-center flex-col sm:w-[400px]">
        <p className="w-[450px] text-[20px] font-semibold sm:text-[15px] sm:w-[350px]">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          similique hic nostrum distinctio vel! Quidem, ad officiis. Eligendi
          provident nam.
        </p>

        <div className="flex justify-between w-3/4 relative sm:w-full">
          <div>
            <div className="font-bold text-[22px] mt-4 sm:text-[18px]">John Doe</div>
            <div className="sm:text-[14px]">Belgrade</div>
          </div>

          <div className="font-semibold font-space text-[205px] text-orange-400 h-[35px] absolute bottom-[100px] left-[380px] sm:left-[260px]">
            ”
          </div>
        </div>
      </div>
    </div>
  );
}
