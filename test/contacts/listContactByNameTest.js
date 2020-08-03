const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')
import {contacts} from '../../constants'

describe("Feature Contatos", ()  => {

    it("Deve consultar se o contato inserido é apresentado na lista!", () => {
        allureReporter.addFeature("Contatos");

        const name = names_contact.nameSort();
        contacts.searchContactByName(name);
        assert.equal(contacts.getTextContact(name), name, 'O nome exibido não corresponde ao inserido!');
    });
});