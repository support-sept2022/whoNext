import React, { useEffect, useState } from "react";
import { getData } from "../services/studentService";

export default function StudentComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getData().then(data => setData(data));
    }, []);

    return (
        <div className="card w-25">
            <img className="card-img-top" src="/assets/images/grandfather.png" alt="Card image" />
            <div className="card-body d-flex flex-column align-items-center">
                {data ? (
                    <>
                        <h4 className="card-title">{data[1].name}</h4>
                        <p className="card-text">Timer</p>
                        <button className="bg-black text-white w-50">Start</button>
                    </>
                ) : (
                    <p>Chargement...</p>
                )}
            </div>
        </div>
    );
}
