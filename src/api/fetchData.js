import { api } from "."
export const useFetchData = async (endpoint) => {

    const response = await fetch(`https://sweyn.co.uk/v1/${endpoint}`, {
        method: "get",
        headers: {
            'Authorization': `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N3ZXluLmNvLnVrL3YxL3NlbGxlci91c2VyL3NpZ25pbiIsImlhdCI6MTY4NDU4NjAxMCwiZXhwIjoxNjg0NTg5NjEwLCJuYmYiOjE2ODQ1ODYwMTAsImp0aSI6ImJlbWhBMER0NDFKSDY1Qm0iLCJzdWIiOiI3NWI3MjQwZi03ZmQ4LTQ1OTQtYmU1OS0wZjA4YzFmZGNkZjgiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.A_G0pf2M-kpJV-220N_4CrxcDnVm2XbzginbAXPUesk`
        },
    })
    const { data } = await response.json()


    return { data };
}