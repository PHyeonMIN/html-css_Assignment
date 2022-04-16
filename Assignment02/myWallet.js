// 파일업로드 보여주는 코드
$(".addrName").on("change", function () {
  var addr = $(".addrName").val();
  $(".upload-addrName").val(addr);
});

$(".identityCopy").on("change", function () {
  var identityCopy = $(".identityCopy").val();
  $(".upload-identityCopyName").val(identityCopy);
});

$(".accountCopy").on("change", function () {
  var accountCopy = $(".accountCopy").val();
  $(".upload-accountCopyName").val(accountCopy);
});

// tab바꾸는 코드
const tabChange = (order) => {
    
    var tabOne = document.getElementsByClassName('newInfoWrap')[0];
    var tabTwo = document.getElementsByClassName('accountInfoWrap')[0];
    var tabThree = document.getElementsByClassName('myAccount')[0];

    var oneButton = document.getElementsByClassName('firstTap')[0];
    var twoButton = document.getElementsByClassName('secondTap')[0];
    var threeButton = document.getElementsByClassName('thirdTap')[0];

    if(order==1){
        tabOne.style.display="flex";
        tabTwo.style.display="none";
        tabThree.style.display="none";

        oneButton.className = "listItem firstTap active";
        twoButton.className = "listItem secondTap";
        threeButton.className = "listItem thirdTap";
    }else if(order==2){
        tabOne.style.display="none";
        tabTwo.style.display="flex";
        tabThree.style.display="none";

        oneButton.className = "listItem firstTap";
        twoButton.className = "listItem secondTap active";
        threeButton.className = "listItem thirdTap";
    }else if(order==3){
        tabOne.style.display="none";
        tabTwo.style.display="none";
        tabThree.style.display="flex";

        oneButton.className = "listItem firstTap";
        twoButton.className = "listItem secondTap";
        threeButton.className = "listItem thirdTap active";
    }
};


// const privacy = () => {
//     var privacyBack = document.getElementsByClassName('infoAgreeIcon')[0];
//     var privacyValue = document.getElementById('privacyOrder');
//     if(privacyValue.value==1){
//         privacyBack.style.backgroundColor = "black";
//         privacyValue.value = 2;
//     }else if(privacyValue.value==2){
//         privacyBack.style.backgroundColor="#d8d8d8";
//         privacyValue.value = 1;
//     }
// };

const topTabChange = (order) => {
    var topTabOne = document.getElementsByClassName('topTab')[0];
    var topTabTwo = document.getElementsByClassName('topTab')[1];
    var topTabThree = document.getElementsByClassName('topTab')[2];
    if(order==1){
        topTabOne.className="topTab active"
        topTabTwo.className="topTab"
        topTabThree.className="topTab"
    }else if(order==2){
        topTabOne.className="topTab"
        topTabTwo.className="topTab active"
        topTabThree.className="topTab"
    }else if(order==3){
        topTabOne.className="topTab"
        topTabTwo.className="topTab"
        topTabThree.className="topTab active"
    }
}



let time = document.getElementsByClassName("time")[0];
const clock = () =>{
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    
    time.innerText = `${hours}:${minutes}`;
};

clock();
setInterval(clock,1000);

const fileUpload = () => {
    const addrFileLabel = document.getElementsByClassName("fileName")[0];
    const identityFileLabel = document.getElementsByClassName("fileName")[1];
    const accountCopyFileLabel = document.getElementsByClassName("fileName")[2];

    const addrName = document.getElementsByClassName("addrName")[0];
    const identityCopy = document.getElementsByClassName("identityCopy")[0];
    const accountCopy = document.getElementsByClassName("accountCopy")[0];
   
    addrFileLabel.innerText = addrName.files[0].name;
    identityFileLabel.innerText = identityCopy.files[0].name;
    accountCopyFileLabel.innerText = accountCopy.files[0].name;
};