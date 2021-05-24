window.onload = function(){
    document.getElementById("clickButton").onclick = timerFont;
    document.getElementById("checkBox").onchange = setBackground;
    document.getElementById("igplay").onclick = igplayFunction;
    document.getElementById("malkovich").onclick = malkovichFunc;
}
function largeInputFont(){
    document.getElementById("inputArea").style.fontSize = "24pt";
}
function checkBoxChangeFont(){
    if(this.checked) {
       var inputBox = document.getElementById("inputArea");
       inputBox.style.textDecoration = "underline";
       inputBox.style.color = "green";
    }
    else{
        var inputBox = document.getElementById("inputArea");
        inputBox.style.color = "blue";
    }
}

function setBackground(){
    if(this.checked){
        document.body.style.backgroundImage = "url('images/background.png')";
    }
}
function largerFontFromPrevFont(){
    var inputBox = document.getElementById("inputArea");
    var prevFont = window.getComputedStyle(inputBox,null).getPropertyValue("font-size");
    var newFont =  parseInt(prevFont) + 2 + "pt";
    inputBox.style.fontSize = newFont;

}
var timer = null;
function timerFont(){
  if(timer == null){
      setInterval(largerFontFromPrevFont, 500);
  }
  else{
      clearInterval(timer);
      timer = null;
  }
}

function malkovichFunc(){
    var inputBoxElem = document.getElementById("inputArea");
    var values = inputBoxElem.value;
    var trimValues = values.trim("");
    var splitValues = trimValues.split(" ");
    for(var i = 0; i< splitValues.length; i++){
        var curStr = splitValues[i];
        if(curStr.length >= 5){
            splitValues[i]= "Malkovich";
        }
        
    }
    var result = splitValues.toString();
    var output = result.replaceAll(",", " ");
    console.log(output);
    inputBoxElem.value = output;
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
        result[idx++] = values[i].substring(subIndex+1, values[i].length) + values[i].substring(0, subIndex+1) + "ay";
    }
    var output= result.toString();
    var out = output.replaceAll(",", " ");
    textEle.value = out;
    console.log(out);
}

        

  
  

