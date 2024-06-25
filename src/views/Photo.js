import React, { useState, useEffect } from 'react';
import "../css/photo.css";

import frame from "../images/frame.png";
import photo1 from "../images/photo/photo1.jpg";
import photo2 from "../images/photo/photo2.jpg";
import photo3 from "../images/photo/photo3.jpg";
import photo4 from "../images/photo/photo4.jpg";
import photo5 from "../images/photo/photo5.jpg";
import photo6 from "../images/photo/photo6.jpg";
import photo7 from "../images/photo/photo7.jpg";
import photo8 from "../images/photo/photo8.jpg";

const Photo = () => {

    const [data, setData] = useState([
        [photo7, photo2, photo3, photo8],
        [photo5, photo4, photo1, photo6]
    ]);

    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = () => {
        if (answer === '72365814'){
            alert("유후! 좀 치는데?");
            window.location.href = '#/quiz2';
        }
        else
            alert("으잇! 😣");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="photo-body">
            <div className="photo-wall">
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className="photo-row">
                        {row.map((item, colIndex) => (
                            <div  key={colIndex} className={`photo-col`}>
                                <img src={frame} className="photo-frame"/>
                                <img src={item} className="photo-photo"/>
                                <div className="photo-number">{4 * rowIndex + colIndex + 1}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="photo-wall2">
                <span className="photo-title">우리의 추억을 순서대로 나열해 줘!</span>
                <input
                    type="text"
                    value={answer}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="photo-input"
                />
            </div>
        </div>
    );
};

export default Photo;
