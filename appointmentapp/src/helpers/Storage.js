
export const setLocalUser = (data)=>{
    localStorage.setItem("authToken", JSON.stringify(data));
};
export const getLocalUser = (data)=>{    
    if(localStorage.getItem("authToken") !== null)
        return localStorage.getItem("authToken");
};
export const removeLocalUser = ()=>{
    if(localStorage.getItem("authToken"))
        localStorage.removeItem("authToken");
}