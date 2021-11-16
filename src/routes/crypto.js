import crypto from 'crypto-js';

export function hash(input){
    return crypto.SHA3(input);
}
