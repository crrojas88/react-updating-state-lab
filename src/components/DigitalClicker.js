import React from 'react';

class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {timesClicked: prevState.timesClicked + 1}
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }

}

export default DigitalClicker