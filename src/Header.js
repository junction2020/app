import { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="w-full text-gray-700 bg-green-300">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <a href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">Chicker Collection Booth 🐔</a>
                </div>
                <nav className="flex-col space-x-4 flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <Link type="button" to="/" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded md:mt-0">
                        Home 🏠
                    </Link>
                    <Link type="button" to="/goals" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded md:mt-0">
                        Goals ⚽
                    </Link>
                    <Link type="button" to="/qr" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded md:mt-0">
                        QR 👩‍💻
                    </Link>
                </nav>
            </div>
            </div>
        )
    }
}


export default Header;