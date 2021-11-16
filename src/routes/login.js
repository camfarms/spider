import { user } from './user.js';
import { hash } from './crypto.js';

export function loginSecure(username, password){
    var pass_hash = hash(password).toString();
    
    user.auth(username, pass_hash, ({ err }) => err && alert(err));
}

export function registerSecure(username, password){
    var pass_hash = hash(password).toString();

    user.create(username, pass_hash, ({ err }) => {
        if (err) {
            alert(err);
        } else {
            loginSecure(username, password);
        }
    });
}
