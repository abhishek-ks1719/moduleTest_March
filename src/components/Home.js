import React, { useEffect, useState } from 'react'
import Card from './Card/Card';
import {useDispatch, useSelector} from 'react-redux'
const Home = () => {

    const data = useSelector(state=> state);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const json = await response.json();

            dispatch({type:'SUCCESS',data:json})
        }
        
        fetchData();
    },[])
  return (
  <>
  
    <div className="display">
        {(!data)?<h2>loading</h2>:data.map((post,key)=>(
        <Card key={key} postData={post}/>
        ))}
    </div>
    </>
  )
}

export default Home