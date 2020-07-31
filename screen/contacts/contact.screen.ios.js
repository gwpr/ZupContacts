require("dotenv/config");

import ContactAndroidScreen from "./contact.screen.android";

export default class ContactIOSScreen extends ContactAndroidScreen {

    get addButton(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name == 'ADICIONAR'`}`);}
    get findAffiliate(){ return $(`-ios predicate string:${`type == 'XCUIElementTypeTextField' && value == 'Selecione o convênio'`}`); }
    get affiliateList() { return $(`-ios predicate string:${`type == 'XCUIElementTypePickerWheel'`}`); }
    get titleAffiliate() { return $("~Código de débito automático"); }
    get codeAffiliate(){ return $("//XCUIElementTypeStaticText[@name='Código de débito automático']/ancestor::XCUIElementTypeOther/following-sibling::XCUIElementTypeOther//XCUIElementTypeTextField"); }
    get addButtonAffiliate() { return $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name == 'CONTINUAR'`}`); }
    get checkAffiliate() { return $("~Débito Automático Cadastrado"); }
    get affiliateNameSuccessScreen() { return $("//XCUIElementTypeStaticText[@name='Convênio']/following-sibling::XCUIElementTypeStaticText");}
    get affiliateCodeSuccessScreen() { return $("//XCUIElementTypeStaticText[@name='Cód. Débito Automático']/following-sibling::XCUIElementTypeStaticText");}
    get buttonMyDebits() { return $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name == 'DÉBITOS AUTOMÁTICOS'`}`); }
    get removeMyDebits() { return $("~Delete"); }
    get deleteButton() { return $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name == 'Excluir'`}`);}
    get confirmRemoveDebit() { return $(`-ios predicate string:${`type == 'XCUIElementTypeButton' && name == 'CONFIRMAR'`}`); }


}