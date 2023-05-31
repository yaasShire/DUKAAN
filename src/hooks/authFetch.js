
import { useState } from 'react'
export const authFetchData = async (endpoint, payload, setError, setIsLoading) => {
    try {
        const response = await fetch(`https://sweyn.co.uk/v1/${endpoint}`, {
            method: "post",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: payload
        })
        const data = await response.json();
        setIsLoading(false)
        return data;

        // return data
    } catch (error) {
        setError(error)
        console.log('====================================');
        console.log(error + "----");
        console.log('====================================');
    } finally {
        setIsLoading(false)
    }
}

