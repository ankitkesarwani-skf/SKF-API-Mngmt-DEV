var Message = {
    
    SourceSystem : context.getVariable("private.SourceSystem"),
    Environment : context.getVariable("private.Environment"),
    ExecutionStep :  context.getVariable("current.flow.name"),
    ApiproxyName : context.getVariable("apiproxy.name"),
    RequestVerb : context.getVariable("request.verb"),
    RequestId : context.getVariable("messageid"),
    CurrentSystemTime : context.getVariable("system.time"),
    RequestStartTime : context.getVariable("client.received.end.time"),
    ErrorFlag : context.getVariable("message.reason.phrase"),
    RequestMessage : context.getVariable("request.content"),
    ResponseMessage : context.getVariable("response.content"),
    RequestURI : context.getVariable("proxy.url")
    
}

context.setVariable("sapapim.ResponseMessage", JSON.stringify(Message));