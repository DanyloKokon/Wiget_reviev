import React from "react"

export default class GetRewiev extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotallFeedbak = () => { return this.state.good + this.state.neutral + this.state.bad }
    
    countingPositiveFeedbackPercentage = () => { }
    render() {
        return <div>
            <h2>Please leave feedback</h2>
            <ul >
                <li onClick={() => { this.setState({ good: this.state.good += 1 }) }}><button>Good</button></li>
                <li onClick={() => { this.setState({ neutral: this.state.neutral += 1 }) }}><button>Neutral</button></li>
                <li onClick={() => { this.setState({ bad: this.state.bad += 1 }) }}><button>Bad</button></li>
            </ul>

            <h2>Statistics</h2>
            <ul>
                <li>Good: {this.state.good}</li>
                <li>Neutarl: {this.state.neutral}</li>
                <li>Bad: {this.state.bad}</li>
                <li>Totall: {this.state.good + this.state.neutral + this.state.bad} </li>
                <li>Positive feedback: </li>
            </ul>
        </div>
    }
}