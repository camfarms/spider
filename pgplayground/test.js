import openpgp from 'openpgp';

(async () => {
  /**
    const { privateKey, publicKey } = await openpgp.generateKey({
        type: 'ecc', // Type of the key, defaults to ECC
        curve: 'curve25519', 
        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], 
        passphrase: 'super long and hard to guess secret', 
        format: 'binary'
    }); */ 
    const { privateKey, publicKey } = await openpgp.generateKey({
        type: 'rsa', // Type of the key
        rsaBits: 4096, // RSA key size (defaults to 4096 bits)
        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
        passphrase: 'super long and hard to guess secret' // protects the private key
    });

    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: 'Hello, World!' }), 
        encryptionKeys: publicKey // this is a key object
      // if you don't want to use an object pass "openpgp.readKey"
    });
    console.log(encrypted); 

    const message = await openpgp.readMessage({
        armoredMessage: encrypted 
    });
    const { data: decrypted } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKey
    });
    console.log(decrypted); // 'Hello, World!'
})();

