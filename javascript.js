function sells(x){
    calculator.display.value=""+Math.sqrt(x);  
}
function backspace(k){
    var value = k;
    calculator.display.value= value.substr(0, value.length - 1);
}
function validation(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  var text;

  if(name.length == 0){
    alert("Please fill the Name");
    return false;
  }
   if(!isNaN(name[0])){
    alert("Name should not start with number");
    return false;
  }
   if(!isNaN(name)){
    alert("Only Characters are allowed");
    return false;
  }
  if(name.length <=2){
    alert("Enter characters more than 2");
    return false;
  }
  if(email.length == 0){
    alert("Please fill the Email ");
    return false;
  }
  if(!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
        alert('email id is invalid')
        return false;
    }
  if(phone.length == 0){
    alert("Please fill the Phone Number");
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    alert("Please Enter  a valid Phone Number");
    return false;
  }
  alert("You have submitted successfully");
  return true;
}


 
function Palindrome(){
    var user = document.getElementById("string").value;
    var view = document.getElementById("demo");
    var result;
    if(user.length==0){
        alert('Enter string');
        return;
    }
    if(user.match(/\s/)){
      alert('Enter string without spaces');
      return;
    }
    else{
      result = checkPalindrome(user);
    }
    if(result){
      view.innerHTML = user+":a PALINDROME";
    }
    else{
      view.innerHTML = user+": not a PALINDROME";
    }
  }

  function checkPalindrome(inputString){
    var len = inputString.length;
    var mid = Math.floor(len/2);
    inputString = inputString.toLowerCase();
    for ( var i = 0; i < mid; i++ ) {
        if (inputString[i] !== inputString[len-1-i]) {
            return false;
        }
    }
    return true;
  }  

  function Anagram(){
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var view = document.getElementById("demo1");
    var result;
    if(s1.length==0 || s2.length==0){
        alert('Enter string');
        return;
    }
    else{
      result = checkAnagram(s1,s2);
    }
    if(result){
      view.innerHTML = s1+", "+s2+": ANAGRAMS";
    }
    else{
      view.innerHTML = s1+", "+s2+": not ANAGRAMS";
    }
  }

  function checkAnagram(s1,s2){
    s1=s1.toLowerCase().replace(/\s/g, '');
    s2=s2.toLowerCase().replace(/\s/g, '');
    if(s1.len!=s2.len){
      return false;
    }
    s1=s1.split('').sort().join('');
    s2=s2.split('').sort().join('');
    if(s1==s2){
      return true;
    }
  }


function winner(){
  var view = document.getElementById("result");
  var result;
  var array = [0,1,2];
  var Num1 = array[Math.floor(Math.random() * array.length)];
  var Num2 = array[Math.floor(Math.random() * array.length)];
  document.getElementById("random1").value = Num1;
  document.getElementById("random2").value = Num2;
  if(Num1==0){
    if(Num2==0){
      result="TIE";
    }
    else if(Num2==1){
      result="Human Survives";
    }
    else{
      result="Nuclear Bomb Survives";
    }
  }
  else if(Num1==1){
    if(Num2==0){
      result="Human Survives";
    }
    else if(Num2==1){
      result="TIE";
    }
    else{
      result="Cockroach Survives";
    }
  }
  else{
    if(Num2==0){
      result="Nuclear Bomb Survives";
    }
    else if(Num2==1){
      result="Cockroach Survives";
    }
    else{
      result="TIE";
    }
  }
  view.innerHTML=result;
}