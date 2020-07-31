const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')

import {contacts,profileContacts} from '../../constants'

describe("Feature Contatos", ()  => {

    it("Conferir se o app retornou para a tela inicial!", () => {
        allureReporter.addFeature("Perfil Contatos");
        const name = names_contact.nameSort();
        contacts.selectContactByName(name);
        browser.back();
        contacts.clearSearch();
        assert.equal(contacts.getTextSearch(), 'Search for contact name', 'O nome exibido não corresponde ao inserido!');
    });
});