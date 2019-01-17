var history=JSON.stringify(document.getElementById("history"));
var all = [];
var current = [];
var clearNow = 0;
function append(input){
  var element=document.getElementById("history");
  if(clearNow==1){
    clearHistory();
  }
  clearNow = 0;
  if(input=='.'){
      var bool=0;
      for(x=0;x<current.length;x++){
        if(current[x]=='.'){
          bool = 1;
        }
      }
      if(bool==0&&current.length>0){
        element.innerHTML+='.';
        document.getElementById("currentNum").innerHTML += '.';
        all.push('.');
        current.push('.');
      }
      if(bool==0&&current.length==0){
        element.innerHTML+='0.';
        document.getElementById("currentNum").innerHTML = '0.';
        all.push(0,'.');
        current.push(0,'.');
      }
         
  } 
  if(all.length!=0&&!isNaN(input)&&(!isNaN(all[all.length-1])||all[all.length-1]=='.')){
    element.innerHTML+=input;
    document.getElementById("currentNum").innerHTML += JSON.stringify(input);
    all.push(input);
    current.push(input);
  }
  if(all[all.length-1]!='.'&&!isNaN(input)&&isNaN(all[all.length-1])){
    element.innerHTML+=input;
    document.getElementById("currentNum").innerHTML=input;
    all.push(input);
    current =[input];
  }
  else if(input!='.'&&!isNaN(all[all.length-1])&&isNaN(input)){
    element.innerHTML+=input;
    document.getElementById("currentNum").innerHTML=input;
    all.push(input);
    current = [];
  }
}
function solve(){
  
    console.log(all);
    var here=document.getElementById("history").innerHTML;
    console.log(here);
    document.getElementById("currentNum").innerHTML = eval(here);
    document.getElementById("history").innerHTML+=('='+JSON.stringify(eval(here)));
    clearNow=1;  
}
function clearHistory(){
  document.getElementById("history").innerHTML='';
  document.getElementById("currentNum").innerHTML='0';
  all=[];
  current=[];
}
function clearCurrentNum(){
  var length = document.getElementById("currentNum").innerHTML.length;
  var historyLength =  document.getElementById("history").innerHTML.length;
  var edited = document.getElementById("history").innerHTML.slice(0,historyLength-length);
  document.getElementById("history").innerHTML = edited;
  document.getElementById("currentNum").innerHTML=edited[edited.length-1];
  current = [];
}