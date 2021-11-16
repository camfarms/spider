import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

let serverLocal = 'https://spider-messenger.herokuapp.com/' 
//const db = GUN();

//Using Heroku server at public network and localhost is local network
export const db = GUN([serverLocal, 'http://localhost:8765/gun']);

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');

user.get('alias').on(v => username.set(v));

db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username.set(alias);

    console.log(`Signed in as ${alias}`);
});

/**
 * steps to "messaging board"
 * get all db funcs in here or other backends
 * add message to database or make a different db called messageDb usr, message, time 
 * fetch & display messages 
 * 
 * ENCRYPTION 
 * GET from fe --> hash / sha256 --> store in gun
 * get from gun --> decrypt --> POST to fe  
 */