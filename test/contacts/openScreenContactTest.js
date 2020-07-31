const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')

import {contacts} from '../../constants'

describe("Feature Contatos", ()  => {

    it("Deve consultar se o App abriu a tela de Contato", () => {
        allureReporter.addFeature("Contatos");
        assert.equal(contacts.getTextTitle(), 'Contacts', 'O nome exibido não corresponde ao inserido!');
    });
});