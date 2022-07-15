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
                return "platforms-halo";
        };

        getPinXpath(){
                return "/html/body/div/div/div[2]/div/div/div[3]/div/div[1]/div[1]/input";
        };

        getAcceptButtonId(){
                return "platforms-halo";
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

        getBackButtonXpath(){
                return "/html/body/div/div/div[2]/div/div/div[5]/h1"
        }

        getNotMeButtonXpath(){
                return "/html/body/div/div/div[2]/div/div/div[3]/div/p[2]"
        }

        getTitleEnterPinXpath(){
                return "/html/body/div/div/div[2]/div/div/span"
        }
}

module.exports= new LoginLocator();