import {user} from './user.js';
import {hash} from './crypto.js';

export function loginSecure(username, password){
    console.log("LoginSecure");
    console.log(hash)
    
    user.auth(username, password, ({ err }) => err && alert(err));
}

export function registerSecure(username, password){
    console.log("RegisterSecure");
    console.log(hash)

    user.create(username, password, ({ err }) => {
        if (err) {
            alert(err);
        } else {
            loginSecure(username, password);
        }
    });
}
