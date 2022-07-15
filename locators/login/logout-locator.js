class LogoutLocator{
    getAvatarButtonXpath(){
            return "/html/body/div/div/div[1]/div/div/img";
    };

    getAvatarNotImgXpath(){
        return "/html/body/div/div/div[1]/div/div/span";
    };

    getLogoutButtonXpath(){
        return "/html/body/div/div/div[2]/div[2]/div/div/div/div[5]/div[6]";
    };

    getOkButtonId(){
        return "modal-button-ok";
    };

};
module.exports= new LogoutLocator();