import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PostContainer() {
    const [post,setPost]=useState([])
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(true)

    const handleScroll=(e)=>{
        const {scrollTop,clientHeight,scrollHeight}=e.currentTarget;
        console.log(scrollTop,clientHeight,scrollHeight)
        if(scrollHeight-scrollTop-1<=clientHeight){
            setPage(page+1)
        }
    }

    useEffect(()=>{
        axios.get(` https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
        .then((response)=>{
            console.log(response)
            setPost([...post,...response.data.data])
        }).catch((err)=>{
            if(err.response){
                console.log(err.response.data)
            }
        })
    },[page])

    return (
       <div className='postContainer'>
           <div className='overflow-y-scroll flex-1' onScroll={handleScroll} >
           {
               post.map((item,index)=>{
                   return (
                   <div className='h-80 bg-gray-200 mb-3 flex flex-col justify-center'>
                    <div>
                        <h1 className='text-center text-black text-3xl'>Name-{item.name}</h1>
                    </div>
                    <h2 className='text-center text-black text-3xl'>Trips-{item.trips}</h2>
                   </div>
                   )
               })
           }
           </div>
       </div>
    )
}

export default PostContainer
