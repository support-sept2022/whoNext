import React, { useEffect, useState } from "react";
import { getData } from "../services/studentService";
import CountdownTimer from "./CountdownTimer";

export default function StudentComponent(props) {
    const [data, setData] = useState(null);

    const [timerDuration, setTimerDuration] = useState(1 * 60); // 5 minutes
    const [status, setStatus] = useState("idle");

    const [selectedName, setSelectedName] = useState(null);
    const [previousName, setPreviousName] = useState(null);
    const [nextName, setNextName] = useState("Who's next?");

    const startTimer = () => {
        setStatus("running");
        if (!selectedName) {
            const availableNames = data.filter((name) => name !== previousName && name !== selectedName);
            if (availableNames.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableNames.length);
                const selectedName = availableNames[randomIndex];
                setSelectedName(selectedName);
                setNextName(selectedName);
            }
        }
    };

    const handleTimerComplete = () => {
        setTimerDuration(1 * 60); // Remettre la durée à sa valeur initiale
        setStatus("idle"); // Remettre le statut à "idle" pour réafficher le bouton "Start"
        setPreviousName(selectedName);
        setSelectedName(null);
        setNextName("Who's next?");
    };

    useEffect(() => {
        getData().then((data) => setData(data.map((item) => item.name)));
    }, []);

    return (
        <div className="card w-25">
            <img
                className="card-img-top"
                src="/assets/images/grandfather.png"
                alt="Card image"
            />
            <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">{nextName}</h4>
                <div>
                    {status === "running" && (
                        <CountdownTimer
                            durationInSeconds={timerDuration}
                            onComplete={handleTimerComplete}
                        />
                    )}
                    {(status === "idle" || status === "finished") && (
                        <button
                            className="btn btn-md btn-dark"
                            onClick={startTimer}
                            disabled={!data || data.length === 0 || status === "finished"}
                        >
                            {selectedName ? "Next" : "Start"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
