export const setLocalUser = (data)=>{
    localStorage.setItem("user", JSON.stringify(data));
};
export const getLocalUser = (data)=>{    
    if(localStorage.getItem("user") !== null)
        return JSON.parse(localStorage.getItem("user"));
};
export const removeLocalUser = ()=>{
    if(localStorage.getItem("user"))
        localStorage.removeItem("user");
}