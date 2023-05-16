import "../styles/SloganDivider.css"

export default function SloganDivider() {
    return (
        <div className="slogan-divider">
            <div className="text-white text-[70px] font-semibold sm:text-[40px] text-center">
                You save big we save big!
            </div>
            <div className="text-white text-[35px] sm:text-[20px] text-center">You can find support from our team <span className="text-orange-500 font-bold">24/7</span></div>
        </div>
    )
}