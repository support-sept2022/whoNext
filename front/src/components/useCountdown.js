// useCountdown.js
import { useEffect, useState } from 'react';

const useCountdown = (durationInSeconds, onComplete) => {
    const [timeLeft, setTimeLeft] = useState(durationInSeconds * 1000);

    useEffect(() => {
        setTimeLeft(durationInSeconds * 1000);
    }, [durationInSeconds]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft <= 1000) {
                    onComplete();
                    clearInterval(interval);
                }
                return timeLeft - 1000;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [onComplete]);

    return getReturnValues(timeLeft);
};

const getReturnValues = (timeLeft) => {
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return [minutes, seconds];
};

export { useCountdown };
