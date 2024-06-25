import React, { useState, useEffect } from 'react';
import "../css/cake.css";

import cake from "../images/cakes/cake.png";
import cake1 from "../images/cakes/cake1.png";
import cake2 from "../images/cakes/cake2.png";
import cake3 from "../images/cakes/cake3.png";
import cake4 from "../images/cakes/cake4.png";
import cake5 from "../images/cakes/cake5.png";
import cake6 from "../images/cakes/cake6.png";
import cake7 from "../images/cakes/cake7.png";
import cake8 from "../images/cakes/cake8.png";
import cake9 from "../images/cakes/cake9.png";
import cake10 from "../images/cakes/cake10.png";
import cake11 from "../images/cakes/cake11.png";
import cake12 from "../images/cakes/cake12.png";
import cake13 from "../images/cakes/cake13.png";
import cake14 from "../images/cakes/cake14.png";
import cake15 from "../images/cakes/cake15.png";

const data = [
    cake, cake1, cake2, cake3, cake4, cake5, cake6, cake7,
    cake8, cake9, cake10, cake11, cake12, cake13, cake14, cake15,
    cake1, cake2, cake3, cake4, cake5, cake6, cake7,
    cake8, cake9, cake10, cake11, cake12, cake13, cake14, cake15
];

const Button = ({ id, x, y }) => {

    const handleClick = () => {
        if (id === 0) {
            alert("아이스박스 당첨!");
            window.location.href = '/candle';
        } else {
            alert("우리의 케이크를 찾아줘🎂");
        }
    };

    return (
        <button
            className="cake-button"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                backgroundImage: `url(${data[id]})`,
            }}
            onClick={handleClick}
        >
        </button>
    );
};
const Cake = () => {

    const randomSpeed = () => {
        const speed = (Math.random() * 3) + 1; // 최소값 1, 최대값 4
        return Math.random() < 0.5 ? speed : -speed; // 무작위 방향
    };

    const [buttons, setButtons] = useState(
        Array.from({ length: 31 }, (_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            dx: randomSpeed(),
            dy: randomSpeed(),
        }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setButtons((buttons) =>
                buttons.map((btn) => {
                    let newX = btn.x + btn.dx;
                    let newY = btn.y + btn.dy;

                    if (newX < 0 || newX > window.innerWidth - 100) {
                        btn.dx = -btn.dx;
                        newX = Math.max(0, Math.min(newX, window.innerWidth - 100));
                    }
                    if (newY < 0 || newY > window.innerHeight - 50) {
                        btn.dy = -btn.dy;
                        newY = Math.max(0, Math.min(newY, window.innerHeight - 50));
                    }

                    return { ...btn, x: newX, y: newY };
                })
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cake-body">
            {buttons.map((btn) => (
                <Button key={btn.id} id={btn.id} x={btn.x} y={btn.y} />
            ))}
        </div>
    );
};

export default Cake;
