const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
var uppass = [];
var inpass = [];

// var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18 ,19, 20, 21, 22, 23, 24];
var arr1 = [10, 11, 12, 13, 14, 15, 16, 17, 18];

function shuffleArray(array) {
    for (let i=0; i < array.length; i++) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const newArr = [];
    while(array.length) newArr.push(array.splice(0,3));
        
    console.log(newArr);    

    return newArr;
}

var imagePath="./images/";
var numberOfImage=9;


var arr = shuffleArray(arr1);
var parentDIV = document.getElementsByClassName("password");
for (var x=0; x<2; x++) {
    
    for (let i=0;i<3;i++){
        for(let j=0; j<3; j++) {
        let img_name = arr[i][j];
        var tempDIV= document.createElement('div');
        tempDIV.setAttribute('class','passimg patimg');
        tempDIV.setAttribute('id', 's'+img_name);
        if(x == 1) tempDIV.setAttribute('onclick','inimg(this)');
        else tempDIV.setAttribute('onclick','upimg(this)');
        var innerHTML= `<img src='`+(imagePath+img_name)+`.png'></img>`
        tempDIV.innerHTML=innerHTML;
        parentDIV[x].appendChild(tempDIV);
    }
}
}

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});


signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(uppass);
        }
        else {
            Image.classList.add('clicked');
            uppass.push(element.id);
            // console.log(element.id);
            // console.log(uppass);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
            console.log(element.id);
            console.log(inpass);
        }
        else {
            Image.classList.add('clicked');
            inpass.push(element.id);
            console.log(element.id);
            console.log(inpass);
        }
    }
}
// element image recognition
function signup() {
    sessionStorage.setItem("upname", document.getElementById('upmail').value);
    sessionStorage.setItem("uppass", uppass);
    var myText = "Account Created Succesfully";
    alert(myText);
}
// image pattern authentication
var v2 = new Boolean(false);
function signin() {
    let str = document.getElementById('inmail').value;
    let array = sessionStorage.getItem("uppass");
    let check1 = array.localeCompare(inpass.toString());
    if ((!str.localeCompare(sessionStorage.getItem("upname"))) && !check1) {
        var myText = "Login is successful";
        alert(myText);
        NewTab();
        
    }
    else{
        var myText = "Login Failed";
        alert(myText);
   
        sendMail3();
       

    }
}
 function sendMail3(){
    emailjs.send('service_7q1sn6s', 'template_v7f98gs')
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}
function sendMail2(){
    emailjs.send('service_7q1sn6s', 'template_ogw30ms')
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}

function NewTab() {
    window.open(
      "https://sih.gov.in/", "_blank");
}