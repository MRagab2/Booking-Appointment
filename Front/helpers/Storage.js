const setLocalUser = (data)=>{
    localStorage.setItem("user", JSON.stringify(data));
};
const getLocalUser = (data)=>{    
    if(localStorage.getItem("user") !== null)
        return JSON.parse(localStorage.getItem("user"));
};
const removeLocalUser = ()=>{
    if(localStorage.getItem("user"))
        localStorage.removeItem("user");
}