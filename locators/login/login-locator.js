class LoginLocator{
        get_login_with_haha_button_id(){
                return "platforms-halo";
        };

        get_username_id(){
                return "accountId";
        };

        get_pass_id(){
                return "password";
        };

        get_continue_button_id(){
                return "platforms-halo";
        };

        get_pin_xpath(){
                return "/html/body/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/input";
        };

        get_accept_button_id(){
                return "platforms-halo";
        };

        get_login_button_xpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[2]/button";
        }

        get_noti_when_login_fail_xpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[3]/div/div/div/div[2]/div/span"
        }

        get_noti_when_not_enter_username_xpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[1]/div/div/div/p/span"
        }

        get_noti_when_not_enter_password_xpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/p/span"
        }
}

module.exports= new LoginLocator();