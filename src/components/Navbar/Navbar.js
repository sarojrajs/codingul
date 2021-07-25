import React, { useState } from 'react'
import EndPopup from '../EndPopup/EndPopup'
import Timer from '../Timer/Timer'
import { BiMenu } from "react-icons/bi";
function Navbar() {
    const [endClass,setEndClass]=useState(false)
    const [showDropDown,setShowDropDown]=useState(false)
    const endClassHandler=()=>{
        setEndClass(!endClass)
    }
    const dropDown=()=>{
        setShowDropDown(!showDropDown)
    }
    return (
        
            <div className='navbar flex items-center justify-between shadow-md relative'>
                <div className='flex items-center'>
                    <div className='p-4  border-r-2 border-solid border-gray-300'>
                        <img className='w-10 object-contain' src='https://media-exp1.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU' alt=''/>
                    </div>
                    <div className='ml-2 invisible sm:visible'>
                    <p>Trial Lesson [Grade 1-3]</p> 
                    </div>
                </div>
                <div className='flex items-center invisible sm:visible'>
                    <Timer/>
                    <button className='bg-red-600 text-white p-1 rounded mx-2 hover:bg-red-400' onClick={endClassHandler}>End Class</button>
                </div>
                <div className='visible sm:hidden cursor-pointer text-gray-500'>
                <BiMenu className="w-10 h-10" onClick={dropDown}/>
                </div>
                {
                    endClass && <EndPopup endClassHandler={endClassHandler}/>
                }
                {
                    showDropDown && 
                    <div className='navdropDown visible sm:invisible'>
                        <Timer/>
                        <button className='bg-red-600 text-white p-1 rounded mx-2 hover:bg-red-400' onClick={endClassHandler}>End Class</button>
                    </div>
                }
            </div>
    )
}

export default Navbar
