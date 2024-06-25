import React, { useState, useEffect } from 'react';
import "../css/quiz.css";
const Quiz2 = () => {

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
        if (answer === '18'){
            alert("딩동댕! Easy 하지?");
            window.location.href = '#/cake';
        }
        else
            alert("땡! 😛");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="quiz-body">
            <div className="quiz-question">
                <h4>1885 = 32</h4>
                <h4>1392 = 15</h4>
                <h4>0609 = 0</h4>
                <h4>0214 = 4</h4>
                <h4>0629 = ?</h4>
            </div>
            <input
                type="text"
                value={answer}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="quiz-input"
            />
        </div>
    );
};

export default Quiz2;
