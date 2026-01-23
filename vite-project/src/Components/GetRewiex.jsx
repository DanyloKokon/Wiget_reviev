import React from "react";

export default class GetReview extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    handleFeedback = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        return total > 0 ? Math.round((good / total) * 100) : 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <div>
                <h2>Please leave feedback</h2>
                <ul style={{ listStyle: "none", display: "flex", gap: "10px", padding: 0 }}>
                    <li><button onClick={() => this.handleFeedback("good")}>Good</button></li>
                    <li><button onClick={() => this.handleFeedback("neutral")}>Neutral</button></li>
                    <li><button onClick={() => this.handleFeedback("bad")}>Bad</button></li>
                </ul>

                <h2>Statistics</h2>
                {total > 0 ? (
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive feedback: {positivePercentage}%</li>
                    </ul>
                ) : (
                    <p>No feedback given</p>
                )}
            </div>
        );
    }
}