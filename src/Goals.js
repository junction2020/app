import { Component } from 'react';
import './assets/main.css'

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick() {
        this.setState(state => ({
        isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <div class="mt-20 container mx-auto">
            <div className="flex flex-wrap">
                {[0,1,2,3,4].map((obj,i) => (
                <div key={i} className="h-auto items-stretch w-1/3 mb-12 h-12">
                    <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
                        <div class="absolute right-0 top-0 mt-2">
                            <span class="inline-block text-gray-900 bg-gray-200 rounded px-3 py-1 text-sm font-semibold mr-2 mb-2">active</span>
                        </div>

                        <img class="w-full" src="https://picsum.photos/300/200" alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Goal item</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pb-6">
                            <div class="shadow w-full rounded bg-grey-light mt-2">
                                <div class="bg-yellow-600 rounded text-xs leading-none py-1 text-center text-white" style={{width: "55%"}}>55%</div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>


        </div>

    )
};


}

export default Goals;
