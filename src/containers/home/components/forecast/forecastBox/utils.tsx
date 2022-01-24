export const stringDateFormatter = (date: number) => {
    const local_date = new Date(date * 1000);
    return local_date.toLocaleString("en-US",{ 
        year:"2-digit",
        month:"2-digit", 
        day:"2-digit",
        minute:"2-digit",
        hour:"2-digit"
    })
}