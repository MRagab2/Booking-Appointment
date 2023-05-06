import { getLocalUser } from "../../helpers/Storage.js"
const user = getLocalUser();

let profileOptions = document.getElementById('profileOptions');
if(!user){
    profileOptions.innerHTML = `<a class="nav-link " href="./signUpIn/sign.html">Log In</a>`;
}else{
    profileOptions.innerHTML = `<a class="nav-link" href="./edit profile/editProfile.html">Profile</a>
                                <a class="nav-link " href="./signUpIn/sign.html">Log Out</a>`;
}