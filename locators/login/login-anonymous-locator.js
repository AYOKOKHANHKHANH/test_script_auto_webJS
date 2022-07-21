class LoginAnonymousLocator{
    getLoginAnonyButtonId(){
        return "platforms-halome"
    }

    getPhoneNumberId(){
        return "phone-login-form-input-phone"
    }

    getStartButtonId(){
        return "phone-login-form-button-ok"
    }

    getOtpXpath(){
        return "/html/body/div/div/div[2]/div/div/div[3]/div[1]/div[1]/input"
    }

    getOtpSecondXpath(){
        return "/html/body/div/div/div[2]/div/div/div[3]/div[2]/div[1]/input"
    }

    getResendOtpCodeViaSmsId(){
        return "phone-verify-form-button-request-sms"
    }

    getUsernameId(){
        return "phone-login-form-input-phone"
}
}

module.exports = new LoginAnonymousLocator()