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

    getOtpId(){
        return "phone-verify-form-input-1"
    }

    getResendOtpCodeViaSmsId(){
        return "phone-verify-form-button-request-sms"
    }

    getUsernameId(){
        return "phone-login-form-input-phone"
}
}

module.exports = new LoginAnonymousLocator()