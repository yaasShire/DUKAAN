import { api } from "../index";
import { useState } from 'react'
export const useFetch = async (payload, setError, setIsLoading, endpoint) => {

    try {

        const { data } = await api.post(endpoint, payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.warn(data);
        // setData(response.data) 
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return data
    } catch (error) {
        setError(error)
    } finally {
        setIsLoading(false)
    }
}

export default useFetch;
