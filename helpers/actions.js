require("dotenv/config");

export default class Actions {

    static scrollByText(text){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("' + text + '"))'}`);
    }

    static scrollByContentDesc(contentDesc){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("'+ contentDesc +'"))'}`);
    }

    static scrollByClass(className, text){
        return $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("'+ text +'").className("'+ className +'"))'}`);
    }

    /*
    Procura dentro do elemento scrolável o filho com a classe e texto informados
    resourceId: id do elemento escrolável
    className: nome da classe do elemento filho do resourceId
    texto: texto do elemento com a className informada 
    */
    static scrollByTextChild(resourceId, className, text){
        return $(`android=${'new UiScrollable(new UiSelector().resourceId("'+ resourceId +'")).getChildByText(new UiSelector().className("'+ className +'"), "'+ text +'")'}`);
    }

    /*
    Procura dentro do elemento scrolável o filho com a classe e o contentdesc informados
    resourceId: id do elemento escrolável
    className: nome da classe do elemento filho do resourceId
    contentDesc: content-desc do elemento com a className informada 
    */
   static scrollByDescriptionChild(resourceId, className, contentDesc){
    return $(`android=${'new UiScrollable(new UiSelector().resourceId("'+ resourceId +'")).getChildByDescription(new UiSelector().className("'+ className +'"), "'+ contentDesc +'")'}`);
   }

   static swipeUpIOS(){
        browser.execute('mobile: swipe', {direction: 'up'});
   }

   static clickKeyboardDoneButton(){
        $("~Toolbar Done Button").click();
   }

   static selectPreviousValuePickerWheel(element){
        browser.execute('mobile: selectPickerWheelValue', {element: element, order: 'previous', offset: 0.15})
   }

   static selectNextValuePickerWheel(element){
        browser.execute('mobile: selectPickerWheelValue', {element: element, order: 'next', offset: 0.15})
   }

    static swipeUpAndroid(){
        try {
            $(`android=${'new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().flingToEnd(55)'}`);
        }catch (e) {
            return e
        }
   }

}