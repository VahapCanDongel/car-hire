import '../styles/Navigation.css'
export default function Navigation() {
    return (
        <div className='nav'>
            <div className='logo'>Logo</div>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Catalogue</li>
                <li>Testimonials</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>

            <ul className="flex justify-center items-center">
                <li>Sign In</li>
                <li className="bg-orange-400 p-4 text-white rounded-md">Register</li>
            </ul>

        </div>
    )
}