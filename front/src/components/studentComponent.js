import React, { useEffect, useState } from "react";
import { getData } from "../services/studentService";
import CountdownTimer from "./CountdownTimer";

export default function StudentComponent(props) {
    const [data, setData] = useState(null);
    const [timerDuration, setTimerDuration] = useState(1 * 60); // 5 minutes
    const [status, setStatus] = useState("idle");

    const startTimer = () => {
        setStatus("running");
    };

    const handleTimerComplete = () => {
        setTimerDuration(1 * 60); // Remettre la durée à sa valeur initiale
        setStatus("idle"); // Remettre le statut à "idle" pour réafficher le bouton "Start"
    };

    useEffect(() => {
        getData().then((data) => setData(data));
    }, []);

    return (
        <div className="card w-25">
            <img
                className="card-img-top"
                src="/assets/images/grandfather.png"
                alt="Card image"
            />
            <div className="card-body d-flex flex-column align-items-center">
                {data ? (
                    <>
                        <h4 className="card-title">{data[0].name}</h4>
                        <div>
                            {status === "running" && (
                                <CountdownTimer
                                    durationInSeconds={timerDuration}
                                    onComplete={handleTimerComplete}
                                />
                            )}
                            {status === "idle" && (
                                <button
                                    className="bg-black text-white w-50"
                                    onClick={startTimer}
                                >
                                    Start
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <p>Aucune donnée</p>
                )}
            </div>
        </div>
    );
}
