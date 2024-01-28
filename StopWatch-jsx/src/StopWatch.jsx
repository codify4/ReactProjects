import { useState, useEffect, useRef } from "react"

export const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let min = Math.floor(elapsedTime / (1000 * 60) % 60);
        let sec = Math.floor(elapsedTime / (1000) % 60);
        let millisec = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, '0');
        min = String(min).padStart(2, '0');
        sec = String(sec).padStart(2, '0');
        millisec = String(millisec).padStart(2, '0');

        return `${hours}:${min}:${sec}:${millisec}`;
    }
 
    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="startBtn" onClick={start} >Start</button>
                <button className="stopBtn" onClick={stop} >Stop</button>
                <button className="resetBtn"onClick={reset} >Reset</button>
            </div>
        </div>
    )
}
