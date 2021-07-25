import React, { useRef, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

function EndPopup({endClassHandler}) {
    const [showAbortedReasons,setAbortedReasons]=useState(false)
    const [showOtherReasonText,setShowOtherReasonText]=useState(false)
    const abortReasonRef=useRef()
    const otherReasonRef=useRef()
    const history=useHistory()

    const abortReasonsHandler=()=>{
        console.log(abortReasonRef)
        setAbortedReasons(abortReasonRef.current.checked)
    }

    const otherReasonsHandler=()=>{
        setShowOtherReasonText(otherReasonRef.current.checked)
    }
    const end=()=>{
        history.push('/end')
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 grid place-items-center bg-gray-600 bg-opacity-70'>
            <div className='border-2 border-solid border-gray-200 w-2/6 h-auto flex flex-col p-3 relative bg-white'>
                <div className='absolute top-3 right-3 text-gray-600 cursor-pointer' onClick={()=>{endClassHandler()}}>
                    <FaTimes/>
                </div>
                <div className='my-4'>
                    <h1 className='text-xl font-semibold text-gray-600'>Select a reason to end class</h1>
                </div>
                <div className='options flex flex-col'> 
                    <div>
                        <input type='radio' className='radio-custom' name='reason' onClick={abortReasonsHandler}/>
                        <label className='text-lg font-semibold text-gray-500'>Class completed</label>
                    </div>
                    <div>
                        <input type='radio' className='radio-custom' name='reason' onClick={abortReasonsHandler} ref={abortReasonRef}/>
                        <label className='text-lg font-semibold text-gray-500'>Class interrupted/aborted</label>
                        {
                            showAbortedReasons && 
                            <div className='ml-3'>
                            <div>
                                <input type='radio' className='radio-custom' name='aborted-reason' onClick={otherReasonsHandler}/>
                                <label className='text-lg font-semibold text-gray-500'>Student didn't showup</label>
                            </div>
                            <div>
                                <input type='radio' className='radio-custom' name='aborted-reason' onClick={otherReasonsHandler}/>
                                <label className='text-lg font-semibold text-gray-500'>Student didn't show anty interest</label>
                            </div>
                            <div>
                                <input type='radio' className='radio-custom' name='aborted-reason' onClick={otherReasonsHandler}/>
                                <label className='text-lg font-semibold text-gray-500'>Student got disconnected</label>
                            </div>
                            <div>
                                <input type='radio' className='radio-custom' name='aborted-reason' onClick={otherReasonsHandler}/>
                                <label className='text-lg font-semibold text-gray-500'>I got disconnected</label>
                            </div>
                            <div>
                                <input type='radio' className='radio-custom' name='aborted-reason' ref={otherReasonRef} onClick={otherReasonsHandler}/>
                                <label className='text-lg font-semibold text-gray-500'>Other reasons</label>
                            </div>
                            {
                                showOtherReasonText && 
                                <div className='ml-3'>
                                    <textarea className='w-full h-10 border-2 border-solid border-gray-200 resize-none outline-none'></textarea>
                                </div>
                            }
                            
                        </div>
                        }
                    
                    </div>
                </div>
                <div className='flex'>
                    <button className='bg-red-600 text-white p-1 rounded mx-2 hover:bg-red-400 ml-auto' onClick={end}>End Class</button>
                </div>
            </div>
        </div>
    )
}

export default EndPopup
