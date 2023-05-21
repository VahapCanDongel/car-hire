export default function Testimonial({ user_review, user_name, user_location }) {
  return (
    <div>
      <div className="border w-[600px] p-10 rounded-sm flex justify-center items-center flex-col sm:w-[400px] min-h-[400px] my-8">
        <p className="w-[450px] text-[20px] font-semibold sm:text-[15px] sm:w-[350px]">

          {user_review}
        </p>

        <div className="flex justify-between w-3/4 relative sm:w-full">
          <div>
            <div className="font-bold text-[22px] mt-4 sm:text-[18px]">{user_name}</div>
            <div className="sm:text-[14px]">{user_location}</div>
          </div>

          <div className="font-semibold font-space text-[205px] text-orange-400 h-[35px] absolute bottom-[100px] left-[380px] sm:left-[260px]">
            ”
          </div>
        </div>
      </div>
    </div>
  );
}
