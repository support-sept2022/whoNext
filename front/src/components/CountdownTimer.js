import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const CountdownTimer = ({ durationInSeconds, onComplete }) => {
    const [minutes, seconds] = useCountdown(durationInSeconds, onComplete);

    return (
        <div className="show-counter d-flex">
            <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} /> <p> : </p>
            <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
        </div>
    );
};

export default CountdownTimer;
