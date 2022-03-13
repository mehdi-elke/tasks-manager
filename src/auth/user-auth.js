
const apiKeyAuth = require('./api-key-auth.js');
class Auth {

    // It's only used for implement a chain of responsability
    // don't use this code in production, it isn't safe !!!
    constructor(nextHandler){
        this.authorizedUsers = [];
        this.nextHandler = apiKeyAuth;
        this.authorizedUsers.push("admin");
        this.authorizedUsers.push("admin1");
        this.authorizedUsers.push("admin2");
    }

    isAuthorized(request){
        console.log("user")
        if(this.authorizedUsers.includes(request.headers['user'])){
            return true;
        } else if(this.nextHandler != null){
            console.log("api-key")
            return this.nextHandler.isAuthorized(request);
        } else {
            return false;
        }
    }
}



const auth = new Auth();

module.exports = auth;