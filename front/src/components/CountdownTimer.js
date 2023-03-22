import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const CountdownTimer = ({ durationInSeconds, onComplete }) => {
    const [minutes, seconds] = useCountdown(durationInSeconds, onComplete);

    return (
        <div className="show-counter d-flex">
            <DateTimeDisplay value={minutes} type={"Mins"} /> <p> : </p>
            <DateTimeDisplay value={seconds} type={"Seconds"} />
        </div>
    );
};

export default CountdownTimer;
