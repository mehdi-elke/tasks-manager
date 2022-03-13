
class APIKeyAuth {

    // It's only used for implement a chain of responsability
    // don't use this code in production, it isn't safe !!!
    constructor(nextHandler){
        this.authorizedKeys = [];
        this.nextHandler = nextHandler;
        this.authorizedKeys.push("123");
    }

    isAuthorized(request){
        if(this.authorizedKeys.includes(request.headers['x-api-key'])){
            return true;
        } else if( this.nextHandler != null){
            return this.nextHandler.isAuthorized(request);
        } else {
            return false;
        }
    }
}



const apiKeyAuth = new APIKeyAuth();

module.exports = apiKeyAuth;