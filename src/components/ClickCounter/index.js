import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {clicked: 0}

  count = () => {
    this.setState(prevState => ({clicked: prevState.clicked + 1}))
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="background-color">
        <h1>
          The button has been clicked
          <span className="countNumber"> {clicked}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button attribute="button" onClick={this.count} className="button">
          Click
        </button>
      </div>
    )
  }
}
export default ClickCounter
