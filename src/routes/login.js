// import functions 
import { user } from './user.js';
import { hash } from './crypto.js';

/** 
  * Login a current user 
  * @param {String} username as user's unique name
  * @param {String} password as user's non-unique passwd 
  */
export function loginSecure(username, password){
    // hash given string 
    var pass_hash = hash(password).toString();
    // pass username and hashed pass to the db
    user.auth(username, pass_hash, ({ err }) => err && alert(err));
}

/** 
  * Register a new user 
  * @param {String} new and unique username 
  * @param {String} password for new user 
  */
export function registerSecure(username, password){
    // hash the given string 
    var pass_hash = hash(password).toString();
    // create new user in db
    user.create(username, pass_hash, ({ err }) => {
        if (err) {
            alert(err);
        } else {
            // if there is no error login new user
            loginSecure(username, password);
        }
    });
}
