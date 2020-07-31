const allureReporter = require('@wdio/allure-reporter').default
const assert = require('chai').assert;

import {contacts} from '../../constants'

describe("Feature Contatos", ()  => {

    it("Deve exibir a tela de Adicionar Contato", () => {
        allureReporter.addFeature("Adicionar Contatos");
        contacts.addContact();
        assert.equal(contacts.getTextTitle(), 'Adicionar Novo Contato', 'O nome exibido não corresponde ao inserido!');
    });
});