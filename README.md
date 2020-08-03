# ZupContacts
Projeto de automação desafio ZUP.

## Estrutura do projeto


## Instalação
1. Clone o repositório - `git clone https://github.com/gwpr/ZupContacts.git`
2. Abra o terminal na pasta do projeto e execute o comando `npm install`

## Configuração
O WebdriverIO gera um arquivo de configuração com todas as informações necessárias. 
Os arquivos se encontram na pasta `configs`.
> As Capabilities se encontram nesse arquivo.
Existe um arquivo de configuração para cada tipo de execução:
- local Android: `wdio.android.conf.js`
- browserstack Android: `wdio.bs.android.conf.js`
- local iOS: `wdio.ios.conf.js`
- browserstack iOS: `wdio.bs.ios.conf.js`

## Executando os testes
**Testes locais**
  - Testes Android: `npm run android`
  - Testes iOS: `npm run ios`

## Testes no BrowserStack
  - Testes Android: `npm run browserstack_android`
  - Testes iOS: `npm run browserstack_ios`
  
## Conta BrowserStack
- Conta: E-mail e Senha enviados para .....

## Allure Jenkins
**Ao instalar o plugin do Allure**
1 - Menu Gerenciar Jenkins
2 - Menu Global Tool Configuration
3 - Menu Allure Commandline instalações...
4 - Inserir o nome desejado.
5 - Selecionar a opção "Instalar automáticamente".
6 - Escolher o instalador Mavem Central versão atual.
7 - Salvar as alterações

## CI
  Espera-se que o executador esteja com o Docker/Jenkis instalado e configurado com o Plugin do Allure.