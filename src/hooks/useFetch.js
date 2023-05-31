import AsyncStorage from "@react-native-async-storage/async-storage"
import { API } from "."

export const fetchData = async (endPoint, setError, setIsLoading) => {
    const access_token = await AsyncStorage.getItem("access_token")
    const token_type = await AsyncStorage.getItem("token_type")
    try {
        if (access_token && token_type) {
            const data = (await API.get(endPoint, {
                headers: {
                    'Authorization': `${token_type} ${access_token}`
                }
            })).data
            setIsLoading(false)
            return { data }
        }
    } catch (error) {
        setError(true)
        console.warn(error);
    } finally {
        setIsLoading(false)
    }
}