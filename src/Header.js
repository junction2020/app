import { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="w-full text-gray-700 bg-purple-200">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">Nog niet echt een naam nog</a>
                </div>
                <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Home</a>
                </nav>
            </div>
            </div>
        )
    }
}


export default Header;