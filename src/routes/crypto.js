import crypto from 'crypto-js';

export var hash = crypto.SHA3("this is a test password").toString();

