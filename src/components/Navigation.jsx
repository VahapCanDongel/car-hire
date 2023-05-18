import '../styles/Navigation.css'
export default function Navigation() {
    return (
        <div className='nav'>
            <div className='logo'>Logo</div>

            <ul>
                <li>About</li>
                <li>Catalogue</li>
                <li>Testimonials</li>
                <li>Contact</li>
            </ul>

            <ul className="flex justify-center items-center">
                <li>Sign In</li>
                <li className="bg-orange-400 p-4 text-white rounded-sm">Register</li>
            </ul>

        </div>
    )
}