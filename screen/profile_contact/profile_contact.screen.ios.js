import ProfileContactScreenAndroid from "./profile_contact.screen.android";

export default class ProfileContactScreenIOS extends ProfileContactScreenAndroid{
    get title() { return $("~Contact Details");}
    set detail_name(text){ return $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && value == '`+text+"'"}`);}
    get detail_icon(){ return $('~contact_details')}
    get phonenumber_tag(){ return $('~PHONE NUMBER')}
    get phonenumber(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/phonenumber")'}`); }
    get email_tag(){ return $('~EMAIL ADDRESS')}
    get email(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/email")'}`); }
    get street_tag(){ return $('~STREET ADDRESS')}
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