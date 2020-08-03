require("dotenv/config");

export default class ProfileContactScreenAndroid {
    get title() { return $(`android=${'new UiSelector().text("Contacts").className("android.widget.TextView")'}`); }
    get detail_name(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/detail_name")'}`); }
    get detail_icon(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/detail_icon")'}`); }
    get phonenumber_tag(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/phonenumber_tag")'}`); }
    get phonenumber(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/phonenumber")'}`); }
    get email_tag(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/email_tag")'}`); }
    get email(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/email")'}`); }
    get street_tag(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/street_tag")'}`); }
    get street1(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/street1")'}`); }
    get street2(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/street2")'}`); }

    getTextPhoneNumber(){
        return this.phonenumber.getText();
    }

    getTextEmail(){
        return this.email.getText();
    }
    getTextStreetAddrees(){
        var street = this.street1.getText();
        return street+' '+this.street2.getText();
    }

    getTitleText(){
        return this.title.getText();
    }

    getNameDatail(){
        return this.detail_name.getText();
    }

}