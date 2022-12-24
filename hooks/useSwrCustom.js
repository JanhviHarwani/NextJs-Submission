import React,{useState} from 'react'
const fetcher=async(api)=>{
    const reponse =await fetch(api)
    const data=await reponse.json()
    return data
}
function useSwrCustom(key) {
    const [error, setError] = useState("")
    const titles=fetcher(key);
   
    if(!titles){setError("error")}
  return (
    {titles,error}
  )
}

export default useSwrCustom;