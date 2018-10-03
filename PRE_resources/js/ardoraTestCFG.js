//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fResp="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Correcto!!!"; messageTime=""; messageError="Vuelva a intentarlo"; messageErrorG="Vuelva a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFJF"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Seleccione tres afirmaciones acerca de los acumuladores."];
var answers1=["MVVuIGFjdW11bGFkb3IgZXMgdW4gcGFy4W1ldHJvIHF1ZSBwdWVkZSBhbG1hY2VuYXI6IG76bWVyb3MsIG5vbWJyZXMgeSBsaXN0YXMu","MVVuIGFjdW11bGFkb3Igc2UgYWN0dWFsaXphIGVuIGNhZGEgbGxhbWFkbyByZWN1cnNpdm8gZGUgbGEgZnVuY2nzbi4","MUVuIGxhIGZ1bmNp824gZmFjdG9yaWFsLCBlbCBhY3VtdWxhZG9yIGVzIHVuIG76bWVybyBjb3JyZXNwb25kaWVudGUgYWwgcmVzdWx0YWRvIGRlbCBmYWN0b3JpYWwu","MGxvcyBhY3VtdWxhZG9yZXMgc29uIHZhcmlhYmxlcyBxdWUgbm8gY2FtYmlhbiBlbiBsYXMgZnVuY2lvbmVzIHJlY3Vyc2l2YXMu","MGxvcyBhY3VtdWxhZG9yZXMgZ2VuZXJhbiBzdSB2YWxvciBwb3IgbWVkaW8gZGUgbXVsdGlwbGljYWNpb25lcyBzdWNlc2l2YXMu"];
var ans=[answers1];
var err=[""];
var ima=[""];
var mp4=[""];
var ogv=[""];
var indexTag=0; actualAnswers=[]; dirMedia="PRE_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
