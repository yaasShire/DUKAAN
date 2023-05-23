export const nameShortner = (name) => {
    return name.length > 16 ? name.slice(0, 15) + '...' : name
}
export const formDataGenerator = (values) => {
    const data = new FormData()
    const keys = Object.keys(values)
    keys.map(key => {
        data.append(key, values[key])
    })
    return data;
}