import ContactAndroidScreen from "./contact.screen.android";
import ContactIOSScreen from "./contact.screen.ios";

export default class ContactScreen {
    constructor(){
        if(driver.isAndroid){
            return new ContactAndroidScreen();
        }else if(driver.isIOS){
            return new ContactIOSScreen();
        }
    }
}