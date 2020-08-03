require("dotenv/config");

import ContactAndroidScreen from "./contact.screen.android";

export default class ContactIOSScreen extends ContactAndroidScreen {

    get title() { return $("//XCUIElementTypeStaticText[@name='Contacts']");}
    get search(){ return $("~Search for contact");}
    get add(){ return $("~UIButtonBarNew");}

    getTextTitle(){
        return this.title.getText();
    }
    getTextSearch(){
        return this.search.getText();
    }
    getTextContact(text){
        return $("~"+text).getText();
    }

    searchContactByName(contact){
        this.search.addValue(contact);
    }

    addContact(){
        this.add.click();
    }

    selectContactByName(name){
        this.searchContactByName(name);
        $(`(//XCUIElementTypeStaticText[@name='${name}'])[1]`).click();
    }
    clearSearch(){
        this.search.clearValue();
    }
}