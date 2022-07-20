class LogoutLocator{
    getAvatarButtonId(){
            return "auth-user-profile-button";
    };

    getLogoutButtonCss(){
        return '[data-id="auth-user-content-button-logout"]';
    };

    getOkButtonId(){
        return "modal-button-ok";
    };

};
module.exports= new LogoutLocator();