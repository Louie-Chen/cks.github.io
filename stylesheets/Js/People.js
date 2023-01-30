var firebaseConfig = {
  apiKey: "AIzaSyB5VkCXdvmei1yH8Wd94DuewfebvMF8nrE",
  authDomain: "concent-4b5ff.firebaseapp.com",
  databaseURL: "https://concent-4b5ff-default-rtdb.firebaseio.com",
  projectId: "concent-4b5ff",
  storageBucket: "concent-4b5ff.appspot.com",
  messagingSenderId: "130866503341",
  appId: "1:130866503341:web:e91223f3495b94e45c3024",
  measurementId: "G-EXKJ2EPGKP"
};
firebase.initializeApp(firebaseConfig);
var newData = [];
var AllDate =[];
var list = document.querySelector(".all");
var Rest = document.querySelector('.cet');
var updateID = String;
var $content = $('#content'),
    $btn = $('#btn'),
    $show = $('#show'),
    ms = new Date().getTime();
var update = document.querySelector('.message')
$(document).ready(function(){
  var db = firebase.firestore();
  var ref =db.collection("個人資料");
  var data =[];
  ref.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      data.push(doc.data());
      data = data.sort(function (a, b) {
        return b.score - a.score;
      });
      newData.push({id:doc.id,data:doc.data()});
    });
    var str ='';
    for(var i=0; i<data.length;i++){
      // str +='<li>'+"<a href='#' class=slow"+data[i].id+" onclick=getdata"+data[i].id+"() data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
      str +='<li>'+"<a href='#' class='slow' data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
    }
    list.innerHTML=str;
  });
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10);
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10);
    var stars = $(this).parent().children('li.star');
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue >= 1) {
        msg = ratingValue;
    }
    else {
        alert('請選擇評分')
    }
    responseMessage(msg);
  });
});
function responseMessage(msg) {
  var x = document.querySelector(".score").innerHTML;
  var num = [];
  num.push(x);
  if(msg=='0'|| x==''){
    return false
  }else if(msg==5){
    num  = parseInt(num) +msg 
  }else if(msg==4){
    num  = parseInt(num) +msg 
  }else if(msg==3){
    num  = parseInt(num) +msg 
  }else if(msg==2){
    num  = parseInt(num) +msg 
  }else if(msg==1){
    num  = parseInt(num) +msg 
  }
  document.querySelector(".score2").innerHTML= num;
  document.querySelector(".score").style.display="none";
}
function order(){
  var db = firebase.firestore();
  var ref =db.collection("個人資料");
  var data =[];
  ref.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      data.push(doc.data());
      data = data.sort(function (a, b) {
        return b.score - a.score;
      });
      newData.push({id:doc.id,data:doc.data()});
    });
    var str ='';
    for(var i=0; i<data.length;i++){
      // str +='<li>'+"<a href='#' class=slow"+data[i].id+" onclick=getdata"+data[i].id+"() data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
      str +='<li>'+"<a href='#' class='slow' data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
    }
    list.innerHTML=str;
  });
}
// $(Rest).delegate(`.Rester`, `click`, function (){
//   $(".star").removeClass("selected");
//   clearInterval(responseMessage);
//   document.querySelector(".score2").innerHTML = "";
//   document.querySelector('.score').style.display="inline-block";
//   order();
//   document.querySelector('.search-list').style.display="block";
//   document.querySelector('.oneDate').style.display="none";
//   document.querySelector('.score-star').style.display="none";
//   document.querySelector('.message').style.display="none";
//   document.getElementById("show").style.display="none";
//   document.querySelector('.show2').style.display="none";
// })
$(list).delegate(`.slow`, `click`, function (e){
  for(var i=0; i<newData.length;i++){
    if(e.target.dataset.item==newData[i].data.name){
      // document.querySelector(".search-list").style.display="none";
      // window.open("./Personnel.html");
      AllDate.push(newData[i].data);
      document.querySelector('.oneDate').style.display="block";
      document.getElementById("name").innerHTML = newData[i].data.name;
      document.getElementById("address").innerHTML = newData[i].data.address;
      document.getElementById("year").innerHTML = newData[i].data.year;
      document.querySelector(".score").innerHTML = newData[i].data.score;
      document.querySelector('.message').style.display="block";
      document.getElementById("show").style.display="block";
      document.querySelector('.show2').style.display="block";
      updateID=newData[i].id;
      var database = firebase.database().ref(updateID);
      database.on('value', function(snapshot) {
          $show.html('');
          for(var i in snapshot.val()){
            document.querySelector('.show2').style.display="none";
            var str ='';
            str +='<ul>'+'<li>'+' <i class="fas fa-user-circle i-size"></i>：'+snapshot.val()[i].content+'</li>'+'</ul>'
            $show.prepend(str);
          }
        });
      document.querySelector('.search-list').style.display="none"
      document.querySelector('.check').style.display="block";
      document.querySelector('.score-star').style.display="block";
    }
  }
})
$(update).delegate(`.check`,`click`,function(){
var db = firebase.firestore();
var ref = db.collection("個人資料").doc(updateID);
var database = firebase.database().ref(updateID);
var newNumber = document.querySelector(".score2").innerHTML;
var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if(h<10){
      h = '0'+h;
    }
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    var now = h+':'+m+':'+s;
    var postData = {
      content:$('#content').val(),
      time:now,
      id:'id'+ms
    };
    if($('#content').val()=="" && newNumber==''){
      alert("請給予評語、評分")
      return false
    }else if(newNumber==''){
      alert("未給予評分")
      return false
    }else if($('#content').val()==""){
      alert("請給予評語")
      return false
    }else
    database.push(postData);
    $content.val('');
    ref.update({
      score:newNumber
    }).then(() => {
      alert('成功送出');
      database.on('value', function(snapshot) {
        $show.html('');
        for(var i in snapshot.val()){
          var str ='';
          str +='<ul>'+'<li>'+' <i class="fas fa-user-circle i-size"></i>：'+snapshot.val()[i].content+'</li>'+'</ul>'
          $show.prepend(str);
        }
      });
    });
})
