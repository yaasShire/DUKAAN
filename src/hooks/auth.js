
import { useState } from 'react'
export const authFetchData = async (endpoint, payload, setError, setIsLoading) => {
    try {
        const response = await fetch(`https://api.elabis.app/v1/${endpoint}`, {
            method: "post",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: payload
        })
        const data = await response.json();
        // setTimeout(() => {
        setIsLoading(false)
        // }, 3000)
        return data;
    } catch (error) {
        setError(error)
    } finally {
        setIsLoading(false)
    }
}

