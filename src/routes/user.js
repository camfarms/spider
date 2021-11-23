import GUN from 'gun'; // the db package being used 
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// setting the "nodes" in our graph
// for our proof of concept this is the only one
let heroku = 'https://spider-messenger.herokuapp.com/gun';

//Using Heroku server at public network and localhost is local network
export const db = GUN([heroku, 'http://localhost:8765/gun']);

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');
// Current user state 
export const userState = writable('');
// Current room ID for chat 
export const roomID = writable('');

// get this user's name 
user.get('alias').on(v => username.set(v));

// authorize current user 
db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username.set(alias);
    userState.set('loggedIn')
    console.log(`Signed in as ${alias}`);
});
