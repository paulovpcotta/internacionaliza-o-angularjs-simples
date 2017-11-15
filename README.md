# Processo de internacionalização no angularjs 1

### Ojetivo

O objetivo é exemplificar como você pode usar uma internacionalização sem ter que injetar alguma biblioteca de terceiro ou do próprio angularjs.

Neste caso estamos usando uma service que faz todo o trabalho onde recupera a partir de um parâmetro que é a linguagem.

### Como usar?

A forma de usar é criar um objeto do tipo language e usar seu vetor para recuperar os dados.

Exemplo de código de inicialização da internacionalização.

``` Código
$scope.translate = internacionalization.getObjTranslate('en-US'); 
```

* Lembre-se deve injetar a service na controller

Exemplo de uso no HTML

``` Código
<input type="button" value="{{translate[0]['login']}}"> 
```

Como o retorno é um array deve-se pegar a posição 0 e a chave que deseja recuperar. Vale lembrar que o json é com chaves então todas as chaves para cada linguagem devem ser com o mesma chave.

Exemplo

```
var translation = '{ "en-US" : [' +
	'{ "login":"Log In", "singUp" : "Sign Up",  "forgot" : "Terms Accepted", ' +
	' "repeatEmail" : "Repeat E-mail", "email" : "E-mail", "register" : "Register", '+
	' "successRegister" : "Successfully held record. Verify e-mail.", ' +
	' "userExist" : "User exist register.", "errorIntern" : "Error: Intern error.", ' +
	' "emailNotCompatible" : "Email is incompatible.", "errorPreference" : "Error preference not load." ' + 
	' , "happyBirt" : "Happy Birthday", "documentUser" : "Number Document", "preferencesTitle" : "Preferences",' +
	'"validateKey" : "Key is not validate.", ' + 
	'"userNotUser" : "User not register or e-mail register.",' + 
	'"validateDeviceUser" : "Device not register. Verify e-mail.", "notSendEmail" : "E-mail not send." ' + 
	', "updateDataUser" : "Update User", "errorPreferenceNotSaved" : "Preference not save."}], '
	+' "pt-BR" : [' +
	'{ "login":"Entrar", "singUp" : "Registrar",  "forgot" : "Termos de Aceite", ' +
	' "repeatEmail" : "Repetir E-mail", "email" : "E-mail", "register" : "Cadastro"' + 
	' ,"successRegister" : "Cadastro com sucesso. Verifique o e-mail.", "userExist" : "Usuário já cadastrado."' + 
	', "errorIntern" : "Erro: Erro interno.", "emailNotCompatible" : "Email is incompatible." ' + 
	' ,"errorPreference" : "Erro ao tentar carregar as preferências.", "happyBirt" : "Feliz Aniversário" ' +
	', "documentUser" : "Digite seu CPF", "preferencesTitle" : "Preferência", "validateKey" : "Não foi possível validar a key.", ' +
	'"userNotUser" : "Usuário não cadastrado.",' + 
	'"validateDeviceUser" : "Celular não cadastrado. Verifique e-mail.", "notSendEmail" : "E-mail não enviado."' + 
	', "updateDataUser" : "Atualizando Usuário", "errorPreferenceNotSaved" : "Não pode ser salvo."}] ' +
	'}';
```
	
### Conclusão

O objetivo é mostrar que podemos criar as nossas API's para facilitar e facilitar as costumizações dos nossos aplicativos.

Caso queira entrar em contato: paulo@holictechnology.com
