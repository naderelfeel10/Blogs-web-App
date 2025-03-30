const { hash,compare } = require('bcryptjs');
const { createHmac } = require('crypto');

const doHash = (value, saltValue) => {
	const result = hash(value, saltValue);
	return result;
};
const doPassValidation = (value,hashedValue)=>{
   const result = compare(value,hashedValue);
   return result;
}

const hmacProcess = (value, key) => {
	const result = createHmac('sha256', key).update(value).digest('hex');
	return result;
};

module.exports = {
    doHash,
    doPassValidation,
    hmacProcess
}


