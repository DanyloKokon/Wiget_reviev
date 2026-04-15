import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            };
        default:
            return state;
    }
};


export default function GetReview() {
    const initialState = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    // const [good, setGood] = useState(0);
    // const [neutral, setNeutral] = useState(0);
    // const [bad, setBad] = useState(0);
    const[state, dispatch] = useReducer(reducer, initialState);


    const handleFeedback = (type) => {
        switch (type) {
            case "good":
                dispatch({ type: "INCREMENT", payload: "good" });
                break;
            case "neutral":
                dispatch({ type: "INCREMENT", payload: "neutral" });
                break;
            case "bad":
                dispatch({ type: "INCREMENT", payload: "bad" });
                break;
        }
    };

    const countTotalFeedback = () => {
        return state.good + state.neutral + state.bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return total > 0 ? Math.round((state.good / total) * 100) : 0;
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