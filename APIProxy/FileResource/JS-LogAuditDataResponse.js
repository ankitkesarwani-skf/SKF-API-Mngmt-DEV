var AuditData = {
    SourceSystem : context.getVariable("private.SourceSystem"),
    ExecutionStep :  context.getVariable("current.flow.name"),
    ApiproxyName : context.getVariable("apiproxy.name"),
    ApiProduct : context.getVariable("apiproduct.name"),
    Environment : context.getVariable("private.Environment"),
    RequestVerb : context.getVariable("request.verb"),
    RequestId : context.getVariable("messageid"),
    RequestURI : context.getVariable("proxy.url"),
    ClientHost : context.getVariable("client.ip"),
    DeveloperID : context.getVariable("developer.id"),
    DeveloperEmail : context.getVariable("developer.email"),
    ApplicationID :  context.getVariable("developer.app.id"),
    ApplicationName : context.getVariable("verifyapikey.VAK-VerifyAPIKEY.DisplayName"),
    CurrentSystemTime : context.getVariable("system.time"),
    RequestStartTime : context.getVariable("client.received.end.time"),
    ErrorFlag : context.getVariable("message.reason.phrase"),
    TargetName : context.getVariable("target.name"),
    TargetIP : context.getVariable("target.ip"),
    TargetServerName : context.getVariable("targetserver.name"),
    TargetResponseTime : context.getVariable("target.received.end.timestamp"),
    ApiResponseTime : context.getVariable("client.received.end.timestamp"),
    TargetResponseEndTime : context.getVariable("target.received.end.time")
    
}

context.setVariable("sapapim.AuditData", JSON.stringify(AuditData));