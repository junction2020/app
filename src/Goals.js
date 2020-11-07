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
        <div className="mt-20 container mx-auto">
            <table class="table-fixed">
                <thead>
                    <tr>
                    <th class="w-1/6 px-4 py-2">Goal</th>
                    <th class="w-2/3 px-4 py-2">Description</th>
                    <th class="w-1/6 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border px-4 py-2">Est platea</td>
                    <td class="border px-4 py-2">Taciti malesuada semper metus fusce vivamus iaculis egestas turpis ultricies faucibus, feugiat nisi habitasse sociosqu nascetur est sollicitudin platea. Eleifend egestas porta quisque tincidunt dictumst hendrerit sagittis nostra tempus ridiculus turpis habitasse dapibus, ornare scelerisque auctor rutrum et a nisi diam est etiam laoreet. Aptent est torquent consectetur proin sodales quam eget fames vestibulum fermentum senectus metus erat, blandit mattis leo felis vehicula ultrices enim dapibus porttitor ad ornare.</td>
                    <td class="border px-4 py-2">
                        <button disabled className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${this.state.isToggleOn ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                        onClick={() => this.handleClick()}>Enable</button>
                    </td>
                    </tr>
                    <tr class="bg-gray-100">
                    <td class="border px-4 py-2">Venenatis tellus</td>
                    <td class="border px-4 py-2">Sociis facilisi pretium class phasellus justo at donec felis facilisis amet hac, etiam lacus rutrum sollicitudin quam odio a egestas elit tellus. Imperdiet venenatis bibendum tincidunt lobortis suspendisse accumsan eleifend fusce eros et felis urna, consectetur nisi inceptos senectus nibh egestas erat amet sodales quisque. Dictum per est vulputate magnis ultrices praesent curae viverra pulvinar orci varius erat bibendum ultricies, eleifend ad blandit cras diam conubia augue consectetur dolor accumsan condimentum rutrum integer.</td>
                    <td class="border px-4 py-2">
                        <button disabled className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${this.state.isToggleOn ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                        onClick={() => this.handleClick()}>Enable</button>
                    </td>
                    </tr>
                    <tr>
                    <td class="border px-4 py-2">Ligula consectetur</td>
                    <td class="border px-4 py-2">Ac urna hac quisque suscipit conubia, elit ridiculus sollicitudin est, hendrerit aliquet facilisis molestie. Sit eleifend ad aliquam lectus donec nec placerat adipiscing vehicula, tempus nam ipsum hac parturient felis nulla rhoncus, nullam a sed taciti velit cubilia nostra magnis. Consequat dui malesuada netus risus ad curae dolor suscipit potenti metus, inceptos mi nisi integer laoreet lorem nullam leo facilisis, aliquet in parturient elit varius rutrum duis quam convallis.</td>
                    <td class="border px-4 py-2">
                        <button disabled className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${this.state.isToggleOn ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                        onClick={() => this.handleClick()}>Enable</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
};


}

export default Goals;
