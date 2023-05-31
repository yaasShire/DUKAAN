import AsyncStorage from "@react-native-async-storage/async-storage"
import { API } from "."

export const fetchData = async (endPoint, setError, setIsLoading) => {
    const access_token = await AsyncStorage.getItem("access_token")
    const token_type = await AsyncStorage.getItem("token_type")
    try {
        const data = (await API.get(endPoint, {
            headers: {
                'Authorization': `${token_type} eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N3ZXluLmNvLnVrL3YxL3NlbGxlci91c2VyL3NpZ25pbiIsImlhdCI6MTY4NTAxMDA2MSwibmJmIjoxNjg1MDEwMDYxLCJqdGkiOiI3SGQ4bklJdU1MdEpSdzk1Iiwic3ViIjoiMDQxYTk1NWItNGFkMS00ODcxLTk5MGYtY2UwYjVmYjIwYjc2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.rELvLLckyjwPQIjauZv71qUNj65FpPP9Yo4lhjWhF1k`
            }
        })).data
        setIsLoading(false)
        return { data }
    } catch (error) {
        setError(true)
        console.warn(error);
    } finally {
        setIsLoading(false)
    }
}