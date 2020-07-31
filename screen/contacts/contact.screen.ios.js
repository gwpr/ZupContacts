require("dotenv/config");

import ContactAndroidScreen from "./contact.screen.android";

export default class ContactIOSScreen extends ContactAndroidScreen {

    get title() { return $("~Contacts");}
    get search(){ return $("~Search for contact");}
    get add(){ return $("~UIButtonBarNew");}
    // get contact_name(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/name")'}`); }
    set contact_name(text){ return $(`-ios predicate string:${`type == 'XCUIElementTypeStaticText' && value == '`+text+"'"}`);}

    getTextTitle(){
        return this.title.getText();
    }
    getTextSearch(){
        return this.search.getText();
    }
    getTextContact(){
        return this.contact_name.getText();
    }

    searchContactByName(contact){
        this.search.addValue(contact);
    }

    addContact(){
        this.add.click();
    }

    selectContactByName(name){
        this.searchContactByName(name);
        this.contact_name.click();
    }
    clearSearch(){
        this.search.clearValue();
    }
}