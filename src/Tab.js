import { Component } from 'react';
import './assets/main.css'

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {isActive: false};
  }

  render() {
    return (
    <div className="mx-auto container pt-4 pb-12">
        <ul className="flex">
            <li className="flex-1 mr-2">
                <a className="text-center block text-white font-bold" href="#">Active</a>
            </li>
            <li className="flex-1 mr-2">
                <a className="text-center block text-white font-bold" href="#">History</a>
            </li>
        </ul>
    </div>
  )};
}

export default Tab;
