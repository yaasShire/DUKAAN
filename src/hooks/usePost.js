import { API } from ".";
import axios from "axios";

export const postData = async (endPoint, payload, setError, setIsLoading) => {
    try {
        // const data = await API.post(endPoint, payload)
        // console.warn(payload);
        const data = await fetch(`https://www.sweyn.co.uk/v1/${endPoint}`, {
            method: 'post',
            body: payload,
            headers: {
                'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N3ZXluLmNvLnVrL3YxL3NlbGxlci91c2VyL3NpZ25pbiIsImlhdCI6MTY4NTAxNzUyOSwibmJmIjoxNjg1MDE3NTI5LCJqdGkiOiJXTnY1U2tzNWZ0dlhwMmsyIiwic3ViIjoiMDQxYTk1NWItNGFkMS00ODcxLTk5MGYtY2UwYjVmYjIwYjc2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.iQzcPDVbJVXK386onGh5jlnGNb9EMyX6LYjU3ZldFdI'
            }
        })
        const result = await data.json();
        setIsLoading(false)

        return { result }
    } catch (error) {
        console.log(error);
        setError(error)

    } finally {
        setIsLoading(false)
    }

}