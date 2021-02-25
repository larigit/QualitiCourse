# QualitiCourse
#### Instalar npm (node package manager) no Linux: curl http://npmjs.org/install.sh | sudo sh
#### Ou: sudo apt install npm
#### Para testar a instalação: npm -v
#### Para atualizar o npm: npm install -g npm
#
#### Instalar yarn: npm install -g yarn
#### Para testar a instalação: yarn -v
#
#### Instalar node: sudo apt install nodejs
#### Para testar a instalação: node -v
#
#### Na pasta raiz, rodar: yarn create react-app frontend-cra 
#### Entrar em "frontend-cra" (na aplicação que foi criada)
#### Rodar: yarn start 
#
### Eslint:
#### $ eslint --init
#### add ao arquivo .eslintrc.js: 
#### add:
#### rules: {
####    'react/jsx-filename-extension': [
####    'error',
####    {
####        extensions: ['.js', '.jsx'],
####    },
####    ],
####    'react/prop-types': 0,
####    'no-console': 'off',
####    'no-restricted-syntax': [
####    'error',
####    {
####        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
####        message: 'Unexpected property on console object was called',
####    },
####    ],
#### },