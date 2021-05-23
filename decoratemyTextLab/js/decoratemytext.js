window.onload = function() {
    document.getElementById("onClick").onclick = delayMsg2;
    document.getElementById("checkBox").onchange = checkBoxChangeFunction;
    document.getElementById("igplay").onclick= igplayFunction;

}
function clickFunction(){
var el = document.getElementById("inputArea");
var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
var fontSize = parseInt(style); 
el.style.fontSize = (fontSize + 2) + "pt";
}
function checkBoxChangeFunction(){
    "use strict";
    document.getElementById("body").style.backgroundImage = "url(images/bckimg.jpg)";

}
function igplay(){
    var input
}
var timer = null;
function delayMsg2(){
    setTimeout(booyah1(), 2000);
    // if(timer==null)
    // setInterval(clickFunction, 500);  
    // else{
    //     clearInterval(timer);
    //     timer = null;
    // }  
}
function igplayFunction(){
    var vowels = ['A', 'E', 'I', 'O', 'U'];
    var textEle = document.getElementById("inputArea");
    var result = [];
    var sartingCharIndex = textEle.value.indexOf("S");
    var trimStr = textEle.value.trim();
    var values = trimStr.split(/[\s\n ]+/);
    var idx = 0;
    console.log(values);
    for(var i = 0; i < values.length; i++){
        var subIndex = 0;
        var str = values[i];
        if(values[i]==""){
            continue;
        }
        if(parseInt(values[i].charAt(0))){
            result[idx++]=values[i];
            continue;
        }
        for(var k = 0; k < str.length; k++){
            var charc = str.charAt(k);
            if(vowels.includes(charc)){
                subIndex = k;
                break;
            }
            
        }
        result[idx++] = values[i].substring(subIndex+1, values[i].length)+ values[i].substring(0, subIndex+1) + "ay";
    }
    var output= result.toString();
    var out = output.replaceAll(",", " ");
    textEle.value = out;
    console.log(out);
}

function booyah1(){
	alert("BOOYAH!");
}

function booyah2(){
	setTimeout(booyah1, 2000);
}


        

  
  

