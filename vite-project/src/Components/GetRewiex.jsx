
import React, { useState } from 'react';

export default function GetReview() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleFeedback = (type) => {
        switch (type) {
            case "good":
                setGood(good + 1);
                break;
            case "neutral":
                setNeutral(neutral + 1);
                break;
            case "bad":
                setBad(bad + 1);
                break;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total > 0 ? Math.round((good / total) * 100) : 0;
    };


    return (<div>
        <h2>Please leave feedback</h2>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px", padding: 0 }}>
            <li><button onClick={() => handleFeedback("good")}>Good</button></li>
            <li><button onClick={() => handleFeedback("neutral")}>Neutral</button></li>
            <li><button onClick={() => handleFeedback("bad")}>Bad</button></li>
        </ul>
        <h2>Statistics</h2>
        {countTotalFeedback() > 0 ? (
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {countTotalFeedback()}</li>
                <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
            </ul>
        ) : (
            <p>No feedback given</p>
        )}

    </div>

    );
}


//    