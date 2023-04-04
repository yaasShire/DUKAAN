export const nameShortner = (name) => {
    return name.length > 16 ? name.slice(0, 15) + '...' : name
}