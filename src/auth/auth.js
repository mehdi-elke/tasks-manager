const userAuth = require('./user-auth.js');
class Auth {

    // It's only used for implement a chain of responsability
    // don't use this code in production, it isn't safe !!!
    constructor(){
        this.nextHandler = userAuth;
    }

    isAuthorized(request){
       return this.nextHandler.isAuthorized(request);
    }
}



const auth = new Auth();
module.exports = auth;