import React, { useState, useEffect, Component, useRef } from "react";

const Timer = ({initialTime}) => {
    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        let interval = null;

        if (time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }else{
            alert("Time out!");
        }
        return () => {
            clearInterval(interval);
        };
    }, [time]);
    return(
        <div>{time}</div>
    )
}

export default Timer;