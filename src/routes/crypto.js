import crypto from 'crypto-js';

// function to be used for passwd hashing 
export function hash(input){
    return crypto.SHA3(input);
}
