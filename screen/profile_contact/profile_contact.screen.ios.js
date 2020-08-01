import ProfileContactScreenAndroid from "./profile_contact.screen.android";

export default class ProfileContactScreenIOS extends ProfileContactScreenAndroid{
    get title() { return $("//XCUIElementTypeStaticText[@name='Contact Details']");}
    set detail_name(text){ return $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && value == '`+text+"'"}`);}
    get detail_icon(){ return $('~contact_details')}
    get phonenumber_tag(){ return $('~PHONE NUMBER')}
    get phonenumber(){ return $("//XCUIElementTypeStaticText[@name='PHONE NUMBER']/following-sibling::XCUIElementTypeStaticText[1]"); }
    get email_tag(){ return $('~EMAIL ADDRESS')}
    get email(){ return $("//XCUIElementTypeStaticText[@name='EMAIL ADDRESS']/following-sibling::XCUIElementTypeStaticText[1]"); }
    get street_tag(){ return $('~STREET ADDRESS')}
    get street1(){ return $("//XCUIElementTypeStaticText[@name='STREET ADDRESS']/following-sibling::XCUIElementTypeStaticText[1]"); }
    get street2(){ return $("//XCUIElementTypeStaticText[@name='STREET ADDRESS']/following-sibling::XCUIElementTypeStaticText[2]"); }

    getTextPhoneNumber(){
        console.log('NÚMERO DO TELEFONE: '+this.phonenumber.getText());
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

    getNameDatail(name){
        return $(`(//XCUIElementTypeStaticText[@name='${name}'])[1]`).getText();
    }

}