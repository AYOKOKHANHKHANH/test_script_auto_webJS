class LoginLocator{
        getLoginWithHahaButtonId(){
                return "platforms-halo";
        };

        getUsernameId(){
                return "accountId";
        };

        getPassId(){
                return "password";
        };

        getContinueButtonId(){
                return "halo-login-form-button-ok";
        };

        getPinXpath(){
                return "/html/body/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/input";
        };

        getAcceptButtonId(){
                return "otp-form-need-button-ok";
        };

        getLoginButtonXpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[2]/button";
        }

        getNotiWhenLoginFailXpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[3]/div/div/div/div[2]/div/span"
        }

        getNotiWhenNotEnterUsernameXpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[1]/div/div/div/p/span"
        }

        getNotiWhenNotEnterPasswordXpath(){
                return "/html/body/div/div[1]/div/div[1]/div/div[2]/div/div/div/div[1]/div[2]/div/div/div/p/span"
        }

        getBackButtonId(){
                return "auth-wrapper-go-back"
        }

        getNotYouButtonId(){
                return "halo-login-form-button-logout"
        }

        getTitleEnterPinId(){
                return "auth-wrapper-title"
        }

       
}

module.exports= new LoginLocator();