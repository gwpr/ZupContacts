import ProfileContactScreenAndroid from "./profile_contact.screen.android";
import ProfileContactScreenIOS from "./profile_contact.screen.ios";

export default class ProfileContactScreen{
    constructor(){
        if(driver.isAndroid){
            return new ProfileContactScreenAndroid();
        }else if(driver.isIOS){
            return new ProfileContactScreenIOS();
        }
    }
}