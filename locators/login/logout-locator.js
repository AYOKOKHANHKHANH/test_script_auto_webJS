class LogoutLocator{
    get_avatar_button_xpath(){
            return "/html/body/div/div/div[1]/div/div/img";
    };

    get_avatar_not_img_xpath(){
        return "/html/body/div/div/div[1]/div/div/span";
    };

    get_logout_button_xpath(){
        return "/html/body/div/div/div[2]/div[2]/div/div/div/div[5]/div[6]";
    };

    get_ok_button_id(){
        return "modal-button-ok";
    };

   

};
module.exports= new LogoutLocator();