import React, {useState} from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currenTime, setCurrentTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)
    return (
        <div className=''>
            <h1 className=''>
                {currenTime}
            </h1>
        </div>
    )
}

export default Clock