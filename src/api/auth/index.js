import { api } from "../index";
import { useState } from 'react'
export const useFetch = async (payload, setError, setIsLoading, endpoint) => {

    try {

        // const { data } = await api.post(endpoint, payload, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // console.warn(data);
        // setData(response.data) 

        const response = await fetch(`https://sweyn.co.uk/v1/${endpoint}`, {
            method: "post",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: payload
        })
        const data = await response.json();
        return data;

        // return data
    } catch (error) {
        setError(error)
    } finally {
        setIsLoading(false)
    }
}

export default useFetch;
