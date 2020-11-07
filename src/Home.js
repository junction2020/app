import { Component } from 'react';
import './assets/main.css'
import { stickers } from "./data";

class Home extends Component {
  render() {
    return (
    <div>
        <div className="mt-20 container mx-auto">
            <p>Welcome to our super cool dashboard!</p>

            <h3>These are your stickers:</h3>
            <div className="flex flex-wrap">
                    {stickers.map((sticker, i) => (
                        <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-12">
                            <img className="object-fill w-full" src={sticker} alt={"unicorn"+i} />
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )};
}

export default Home;
