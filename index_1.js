const generateButton = document.getElementById("generate-button");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const let1 = document.getElementById("let-1")
const let2 = document.getElementById("let-2")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const popup = document.getElementById("popup");
const passwordLength = 15;
function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length)
   return characters[randomIndex]
}
;
function getRandomPassword(){
 let password = ""
  for(let i = 0 ; i < passwordLength; i++){
    password+= getRandomCharacter()
  } return password
};
generateButton.addEventListener("click", function() {
  password1.textContent= getRandomPassword();
  password2.textContent = getRandomPassword();
 });
 
 let1.addEventListener("click", function(){
    const text = password1.textContent;
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard")
    popup.style.display = "block";
 });
 let2.addEventListener("click", function(){
  const copyText = password2.textContent;
  navigator.clipboard.writeText(copyText);
  alert("Text copied to clipboard")
 })
