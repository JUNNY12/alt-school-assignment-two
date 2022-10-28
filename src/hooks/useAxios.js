import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (url) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async () =>{
        setLoading(true);
        try{
            const res = await axios.get(url)
            setResponse(res.data)
            setError(null)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
      }, [url])
      

    return {response, error, loading}
}

export default useAxios;