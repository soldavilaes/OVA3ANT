//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#800000"; colorText="#000000"; colorSele="#FFFF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Correcto!!!"; messageTime=""; messageError="Vuelve a Intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>Los <select name="item1" id="item1" class="ardoraCombo"></select> son utilizados para <select name="item2" id="item2" class="ardoraCombo"></select> información, de tal manera que deben <select name="item3" id="item3" class="ardoraCombo"></select> en cada <select name="item4" id="item4" class="ardoraCombo"></select> de una determinada <select name="item5" id="item5" class="ardoraCombo"></select>. Por esta razón, las funciones contienen este tipo de <select name="item6" id="item6" class="ardoraCombo"></select>.</p>'];
var b=["MTE","Ng","Mg","Nw","Mw","MTA","MTg","Mg","Mw","MTQ","NQ","Ng","MjE","MjI","NA","MQ","MTU"];
var c=[10,9,10,8,10,11,10,9,12,5,7,10,9,7,10,12,12];
var answers=["incluirsen","manipular","contadores","procesar","parámetros","integrarsen","definición","almacenar","modificarsen","ciclo","función","parámetros","variables","valores","invocación","acumuladores","nombramiento"];
var a=["3","2","1","2","1","3","5","2","3","4","5","6","6","6","4","1","4"];
var itemCorr=["0","0","0","0","0","0"];
var itemHelp=["","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Y29tcGxldGFy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Arial, Helvetica, sans-serif";
