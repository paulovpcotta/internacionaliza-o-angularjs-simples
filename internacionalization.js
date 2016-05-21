angularjs.service('internacionalization', ['$http', 
                                function($http){
	
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
	
	var translate;
	
	this.getObjTranslate = function(language){
		translate = JSON.parse(translation);
		if(language == "pt-BR"){
			return translate["pt-BR"];
		}else{
			return translate["en-US"];
		}
	};
	
	this.getReturnTranslate = function(){
		return translate;
	}
	
}]);
