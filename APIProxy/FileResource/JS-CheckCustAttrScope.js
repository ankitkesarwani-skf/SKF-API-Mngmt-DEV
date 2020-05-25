var AppScope = context.getVariable("verifyapikey.VAK-VerifyAPIKEY.scope");
var AppScope = "[" + AppScope + "]";
var Apiname = context.getVariable("apiproxy.name");
var ValidScope = AppScope.indexOf(Apiname);
context.setVariable("sapapim.AppScope", AppScope);
context.setVariable("sapapim.Apiname", Apiname);
context.setVariable("sapapim.ScopeValidation", ValidScope);
if (ValidScope > 0)
{
    context.setVariable("sapapim.AuthorizedScope","Authorized");
}
else 
{
    context.setVariable("sapapim.AuthorizedScope","UnAuthorized");
}