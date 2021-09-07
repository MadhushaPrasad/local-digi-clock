import React , {useState} from "react";
import './digitalClock.css'


const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toDateString();

    const [ctime,setCtime] = useState(time);
    const [cDate,setCDate] = useState(date);

    const updateTime = () => {
        setCtime(new Date().toLocaleTimeString());
        setCDate(new Date().toDateString());
    }

    setInterval(updateTime,1000);

    return (
        <div className="digital-clock">
            <div className='dateDiv'>
                <p>{cDate}</p>
            </div>
            <div className='timeDiv'>
                <p>{ctime}</p>
            </div>
        </div>
    );
};

export default DigitalClock;