import React, { useState, useEffect } from 'react';
import "../css/quiz.css";
const Quiz = () => {

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
        if (answer === '502'){
            alert("딩동댕! 오늘은 502일이야💙");
            window.location.href = '#/photo';
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
                <h4>김상규 = 2</h4>
                <h4>정소영 = 3</h4>
                <h4>시흥 = 2</h4>
                <h4>정왕 = 3</h4>
                <h4>빙그레바나나우유 = ?, 자취 = ?, 불와주 = ?</h4>
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

export default Quiz;
