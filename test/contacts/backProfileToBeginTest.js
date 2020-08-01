const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')

import {contacts,profileContacts} from '../../constants'
const expectText = driver.isAndroid ? 'Search for contact name' : 'Search for contact';

describe("Feature Contatos", ()  => {

    it("Conferir se o app retornou para a tela inicial!", () => {
        allureReporter.addFeature("Perfil Contatos");

        const name = names_contact.nameSort();
        contacts.selectContactByName(name);
        browser.back();
        contacts.clearSearch();
        assert.equal(contacts.getTextSearch(), expectText, 'O nome exibido não corresponde ao inserido!');
    });
});