import React, { useState, useEffect } from 'react';
import "../css/main.css";
import earth from "../images/earth.png";
import moon from "../images/moon.png";

const Main = () => {
    const [center, setCenter] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [isDragging, setIsDragging] = useState(false);
    const [year, setYear] = useState(new Date().getFullYear()); // 연도 상태 추가
    const [previousDayOfYear, setPreviousDayOfYear] = useState(180); // 이전 daysOfYear 상태로 변경
    const radius = 150;
    const tolerance = 60;

    const calculateDayOfYear = (date) => {
        const startOfYear = new Date(date.getFullYear(), 0, 1);
        const diff = date - startOfYear;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        return dayOfYear;
    };

    const initialPosition = () => {
        const currentDate = new Date();
        const dayOfYear = calculateDayOfYear(currentDate);
        const angle = ((dayOfYear - 1) / 365) * 2 * Math.PI - (Math.PI / 2); // 1월 1일을 12시 방향으로 설정
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        return { x, y };
    };

    const [position, setPosition] = useState(initialPosition);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                const { clientX, clientY } = event;
                const distX = clientX - center.x;
                const distY = clientY - center.y;
                const angle = Math.atan2(distY, distX);

                const distance = Math.sqrt(distX * distX + distY * distY);

                if (distance >= radius - tolerance && distance <= radius + tolerance) {
                    let normalizedAngle = angle >= 0 ? angle : (2 * Math.PI + angle);
                    normalizedAngle = (normalizedAngle / (2 * Math.PI)) * 365 + 90;

                    if (normalizedAngle > 367) normalizedAngle -= 366;

                    const daysOfYear = Math.floor(normalizedAngle);

                    // 연도 계산 및 설정
                    let newYear = year;
                    if (daysOfYear < 50 && previousDayOfYear > 300) {
                        newYear += 1;
                    } else if (daysOfYear > 300 && previousDayOfYear < 50) {
                        newYear -= 1;
                    }

                    setYear(newYear);

                    const newDate = new Date(newYear, 0, daysOfYear);
                    setCurrentDate(newDate);
                    const x = center.x + radius * Math.cos(angle);
                    const y = center.y + radius * Math.sin(angle);
                    setPosition({ x, y });
                    setPreviousDayOfYear(daysOfYear);
                } else {
                    setIsDragging(false);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', () => setIsDragging(false));

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', () => setIsDragging(false));
        };
    }, [center, isDragging, year, previousDayOfYear]);

    useEffect(() => {
        const handleResize = () => {
            setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleButtonClick = () => {
        window.location.href = '#/quiz';
    };

    const isButtonActive = !isDragging && year === 2024 && currentDate.getMonth() === 5 && currentDate.getDate() === 29;

    return (
        <div className="main-body">
            <div className="main-title">When is your birthday?</div>
            <img src={earth} className="main-earth" alt="Earth" />
            <svg className="main-line">
                <circle
                    cx={center.x}
                    cy={center.y}
                    r={radius}
                    className="main-circle"
                />
            </svg>
            <div
                className="main-moon"
                style={{
                    top: position.y,
                    left: position.x,
                    backgroundImage: `url(${moon})`
                }}
                onMouseDown={handleMouseDown}
            />
            <div className="main-date">Birthday: {year}. {currentDate.toLocaleDateString(undefined, { month: '2-digit', day: '2-digit' })}</div>
            {isButtonActive && <button className="main-next" onClick={handleButtonClick}/>}
        </div>
    );
};

export default Main;
