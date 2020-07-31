require("dotenv/config");

export default class ContactAndroidScreen  {
    get title() { return $(`android=${'new UiSelector().text("Contacts").className("android.widget.TextView")'}`); }
    get search(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/main_search")'}`); }
    get add(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/fab")'}`); }
    get contact_name(){ return $(`android=${'new UiSelector().resourceId("'+ process.env.PACKAGE +':id/name")'}`); }

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