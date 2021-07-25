import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [timer,setTimer]=useState('00:00');
    const intervalRef=useRef();
    function getTimeRemaining(endTime){
        const total=Date.parse(endTime)-Date.parse(new Date());
        const seconds=Math.floor((total/1000)%60);
        const minutes=Math.floor((total/1000/60)%60);
        return{
            total,seconds,minutes
        };
    }
    function startTimer(deadline){
        let {total,seconds,minutes}=getTimeRemaining(deadline);
        if(total>=0){
            setTimer(
                (minutes>9?minutes:'0'+minutes)+':'+(seconds>9?seconds:'0'+seconds)
            )
        }else{
            clearInterval(intervalRef.current)
            localStorage.removeItem('startTime')
        }
    }
    function clearTimer(endTime){
        setTimer('10:00');
        if(intervalRef.current)clearInterval(intervalRef.current);
        const id=setInterval(()=>{
            startTimer(endTime)
        },[1000])
        intervalRef.current=id;
    }
    function getDeadlineTime(){
        let deadline=new Date();
        if(localStorage.getItem('startTime')){
            deadline=localStorage.getItem('startTime')
        }else{
            deadline.setMinutes(deadline.getMinutes()+10)
            // deadline.setSeconds(deadline.getSeconds()+15)
            localStorage.setItem('startTime',deadline)    
        }
        return deadline
    }
    useEffect(()=>{
        clearTimer(getDeadlineTime());
    },[])
    return (
        <div>
            <p>{timer}</p>
        </div>
    )
}

export default Timer
