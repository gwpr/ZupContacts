const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;
const names_contact = require ('../../data/names_contact')

import {contacts,profileContacts} from '../../constants'

describe("Feature Contatos", ()  => {

    it("Conferir se o nome do Perfil corresponde ao contato selecionado!", () => {
        allureReporter.addFeature("Perfil Contatos");

        const name = names_contact.nameSort();
        contacts.selectContactByName(name);
        assert.equal(profileContacts.getNameDatail(name), name, 'O nome exibido não corresponde ao inserido!');
    });
});