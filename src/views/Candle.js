import React, { useState, useEffect } from 'react';
import "../css/candle.css";

import candle2 from "../images/candle2.png";
import candle6 from "../images/candle6.png";

const Candle = () => {
    const [size1, setSize1] = useState({ height: 80, width: 60 });
    const [size2, setSize2] = useState({ height: 80, width: 60 });
    const [opacity, setOpacity] = useState(1);
    const [clickCount1, setClickCount1] = useState(0);
    const [clickCount2, setClickCount2] = useState(0);
    const [waiting, setWaiting] = useState(false);

    const handleButtonClick = (setSize, currentSize, setClickCount) => {
        if ((clickCount1 + clickCount2) < 8 && currentSize.height > 0 && currentSize.width > 0) {
            setSize({
                height: currentSize.height - 20,
                width: currentSize.width - 15
            });
            setOpacity((prevOpacity) => Math.max(prevOpacity - 0.12, 0));
            setClickCount((prevCount) => prevCount + 1);
        }
    };

    useEffect(() => {
        if ((clickCount1 + clickCount2) >= 8) {
            setWaiting(true);
            setTimeout(() => {
                setWaiting(false);
                checkButtonClicks();
            }, 1000);
        }
    }, [clickCount1, clickCount2]);

    const checkButtonClicks = () => {
        alert("후~ 생일 축하해 🤍🎉");
        window.location.href = '#/letter';
    };

    return (
        <div className="candle-body">
            <div className="candle-boxes">
                <div className="candle-box">
                    <div className="candle-btn-box">
                        {size1.height > 0 && size1.width > 0 && (
                            <button
                                className="candle-button"
                                style={{ height: `${size1.height}px`, width: `${size1.width}px` }}
                                onClick={() => handleButtonClick(setSize1, size1, setClickCount1)}
                            >
                            </button>
                        )}
                    </div>
                    <img src={candle2} className="candle-candle" style={{ opacity }} />
                </div>
                <div className="candle-box">
                    <div className="candle-btn-box">
                        {size2.height > 0 && size2.width > 0 && (
                            <button
                                className="candle-button"
                                style={{ height: `${size2.height}px`, width: `${size2.width}px` }}
                                onClick={() => handleButtonClick(setSize2, size2, setClickCount2)}
                            >
                            </button>
                        )}
                    </div>
                    <img src={candle6} className="candle-candle" style={{ opacity }} />
                </div>
            </div>
        </div>
    );
};

export default Candle;
