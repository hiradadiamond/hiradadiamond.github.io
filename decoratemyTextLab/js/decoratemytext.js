window.onload = function(){
    document.getElementById("clickButton").onclick = timerFont;
    document.getElementById("checkBox").onchange = checkBoxChangeFont;
    document.getElementById("igplay").onclick = igplayFunction;
    document.getElementById("malkovich").onclick = malkovichFunc;
}
function largeInputFont(){
    document.getElementById("inputArea").style.fontSize = "24pt";
}
function checkBoxChangeFont(){
    var inputElem = document.getElementById("inputArea");
    if(this.checked) {
       var inputBox = document.getElementById("inputArea");
       inputBox.style.textDecoration = "underline";
       inputBox.style.color = "green";
       setBackground();
    } 
    else{
        document.body.style.backgroundImage = "none";
        inputElem.style.color = "";
        inputElem.style.textDecoration = "none";
    } 
}

function setBackground(){
        document.body.style.backgroundImage = "url('images/background.png')";
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
    var splitValues = inputBoxElem.value.split('\n');
    console.log(splitValues);
    var resultStr = "";
    for(var i = 0; i< splitValues.length; i++){
        var curStr = splitValues[i].split(" ");
        console.log(curStr);
        for(var j = 0; j < curStr.length; j++){
            if(curStr[j]==""){
                resultStr+= " ";
                continue;
            }
            else{

                if(parseInt(curStr[j])){
                    resultStr += curStr[j] + " ";
                    continue;
                }
                else if(curStr[j].length>=5){
                    resultStr += "Malkovich ";
                }
                else{
                    resultStr += curStr[j]+ " ";
                }
            }
        }
        resultStr += "\n";   
    }
    console.log(resultStr);
    inputBoxElem.value =  resultStr;  
}

function igplayFunction(){
    var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    var textEle = document.getElementById("inputArea");
    var values = textEle.value.split('\n');
    var idx = 0;
    console.log(values);
    var finalString = "";
    for(var i = 0; i < values.length; i++){
        var lines = values[i].split(' ');
        for(var j=0;j<lines.length;j++) {
            var str = lines[j];
            if(lines[j]==""){
                finalString += " ";
                continue;
            } else {
                var curString = lines[j];
                var idx = 0;
                var consonentCluster = "";
                var rest = "";
                if (curString.charAt(idx) >= '0' && curString.charAt(idx) <= '9') {
                    finalString += curString;
                    continue;
                }

                while(idx < curString.length && !vowels.includes(curString.charAt(idx))) {
                    console.log(vowels.includes(curString.charAt(idx)));
                    consonentCluster += curString.charAt(idx++);
                } 

                while(idx < curString.length) {
                    rest += curString.charAt(idx++)
                }
                var curResult = rest + consonentCluster + "ay ";
                console.log(curResult);
                finalString += curResult;
            }
        }
        finalString += "\n";
    }
    textEle.value = finalString;
    console.log(finalString);
}
        

  
  

