
export const setLocalUser = (data)=>{
    localStorage.setItem("x-auth-token", JSON.stringify(data));
};
export const getLocalUser = (data)=>{
    if(localStorage.getItem("x-auth-token"))
        return localStorage.getItem("x-auth-token",JSON.parse(data));
};
export const removeLocalUser = ()=>{
    if(localStorage.getItem("x-auth-token"))
        localStorage.removeItem("x-auth-token");
}