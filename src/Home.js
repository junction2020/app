import { Component } from 'react';
import './assets/main.css'
import { stickers } from "./data";

class Home extends Component {
  render() {
    return (
    <div>
        <div className="mt-20 container mx-auto">

            <h3 className="text-2xl">These are your stickers:</h3>
            <div className="flex flex-wrap">
                    {stickers.map((sticker, i) => (
                        <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-12">
                            <div class="rounded-full h-auto w-100 p-5 ml-12 mr-12 flex items-center justify-center bg-gray-300">
                                <img className="object-contain w-full" src={sticker} alt={"unicorn"+i} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )};
}

export default Home;
