const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')

import {contacts,profileContacts} from '../../constants'

describe("Feature Contatos", ()  => {
    it("Verificar se o número de telefone não é vazio", () => {
        allureReporter.addFeature("Perfil Contatos");

        const name = names_contact.nameSort();
        contacts.selectContactByName(name);
        assert.notEqual(profileContacts.getTextPhoneNumber(), '', 'Campo Vazio');
    });
});