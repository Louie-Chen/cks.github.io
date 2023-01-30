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
  var ChartData=[];
  var NewChartData=[];
  ref.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      data.push(doc.data());
      data = data.sort(function (a, b) {
        return b.score - a.score;
      });
      ChartData.push({id:doc.id,ChartData:data[0].Charts});
      newData.push({id:doc.id,data:doc.data()});
      // console.log(ChartData);
    });
    var str ='';
    for(var i=0; i<data.length;i++){
      // console.log(data[i].YearsPractice);
      str +=
      "<tr class='slow' data-item="+data[i].name+">"+
      "<td class='text-center' data-item="+data[i].name+">"+data[i].name+'</td>'+
      "<td class='text-center' data-item="+data[i].name+">"+data[i].case+'</td>'+
      "<td class='text-center' data-item="+data[i].name+">"+data[i].Charts[0].label+data[0].Charts[i].data+'%'+'<br>'+
      data[i].Charts[1].label+data[1].Charts[i].data+'%'+'<br>'+
      data[i].Charts[2].label+data[2].Charts[i].data+'%'+'<br>'+
      data[i].Charts[3].label+data[3].Charts[i].data+'%'+
      '</td>'+
      "<td class='text-center' data-item="+data[i].name+">"+data[i].YearsPractice+'</td>'+
      '</tr>'
      
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
      str +='<li>'+"<a href='#' class='slow' data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
    }
    list.innerHTML=str;
  });
}
$(Rest).delegate(`.Rester`, `click`, function (){
  $(".star").removeClass("selected");
  clearInterval(responseMessage);
  document.querySelector(".score2").innerHTML = "";
  document.querySelector('.score').style.display="inline-block";
  order();
  document.querySelector('.search-list').style.display="block";
  document.querySelector('.oneDate').style.display="none";
  document.querySelector('.score-star').style.display="none";
  document.querySelector('.message').style.display="none";
  document.getElementById("show").style.display="none";
  document.querySelector('.show2').style.display="none";
})
var chart;
var legend;
$(list).delegate(`tr`, `click`, function (e){
  console.log(e.target);
  var pie=[];
  var color=[];
  var dataSc=[];
  
  for(var i=0; i<newData.length;i++){
    if(e.target.dataset.item==newData[i].data.name){
      for(var k=0; k<25;k++){
        // console.log([newData[i].data.Charts[k].label,newData[i].data.Charts[k].data]);
        color.push(newData[i].data.Charts[k].color);
        pie.push({country:newData[i].data.Charts[k].label,value:newData[i].data.Charts[k].data});
        dataSc.push(newData[i].data.Charts[k].data)
      }
      var chartData = pie;
      console.log(chartData);
      chart = new AmCharts.AmPieChart();
        chart.dataProvider = chartData;
        chart.titleField = "country";
        chart.valueField = "value";
        chart.outlineColor = "";
        chart.outlineAlpha = 0.8;
        chart.outlineThickness = 2;
        // this makes the chart 3D
        chart.depth3D = 20;
        chart.angle = 30;
        // WRITE
        chart.write('chartdiv');
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
      // document.querySelector('.search-list').style.display="none"
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
function UpData(){
  var db = firebase.firestore();
  var ref = db.collection('個人資料').doc('律師4');
  // var Chart ={
  //   Real:"房地糾紛",
  //   litigation:"訴訟程序",
  //   Car:"車禍糾紛",
  //   FraudCases:"詐騙案件",
  //   DrugProblem:"毒品問題",
  //   ConstructionProject:"營造工程",
  //   Company:"公司經營",
  //   Inheritance:"遺產繼承",
  //   GovernmentProcurement:"政府採購",
  //   EnvironmentalProtection:"環境保護",
  //   InsuranceDispute:"保險爭議",
  //   ElectionLitigation:"選舉訴訟",
  //   FinancialMarket:"金融市場",
  //   LaborDispute:"勞資糾紛",
  //   ConsumerDisputes:"消費爭議",
  //   EmotionalEvents:"感情事件",
  //   BankDebt:"銀行債務",
  //   IntellectualProperty:"智慧財產",
  //   FairTrade:"公平交易",
  //   SexualAssaultCases:"性侵案件",
  //   MedicalDispute:"醫療糾紛",
  //   ChildhoodEvents:"兒少事件",
  //   OnlineWorld:"網路世界",
  //   StateCompensation:"國家賠償",
  //   PaymentOrder:"支付命令"
  // }
  var Chart =[
    {label:"房地糾紛",data:4,color:"#F3F3FA"},
    {label:"訴訟程序",data:4,color:"#E6E6F2"},
    {label:"車禍糾紛",data:4,color:"#D8D8EB"},
    {label:"詐騙案件",data:4,color:"#C7C7E2"},
    {label:"毒品問題",data:4,color:"#B8B8DC"},
    {label:"營造工程",data:4,color:"#A6A6D2"},
    {label:"公司經營",data:4,color:"#9999CC"},
    {label:"遺產繼承",data:4,color:"#8080C0"},
    {label:"政府採購",data:4,color:"#7373B9"},
    {label:"環境保護",data:4,color:"#5A5AAD"},
    {label:"保險爭議",data:4,color:"#5151A2"},
    {label:"選舉訴訟",data:4,color:"#484891"},
    {label:"金融市場",data:4,color:"#9F35FF"},
    {label:"勞資糾紛",data:4,color:"#921AFF"},
    {label:"消費爭議",data:4,color:"#8600FF"},
    {label:"感情事件",data:4,color:"#6F00D2"},
    {label:"銀行債務",data:4,color:"#5B00AE"},
    {label:"智慧財產",data:4,color:"#4B0091"},
    {label:"公平交易",data:4,color:"#3A006F"},
    {label:"性侵案件",data:4,color:"#28004D"},
    {label:"醫療糾紛",data:4,color:"#B15BFF"},
    {label:"兒少事件",data:4,color:"#BE77FF"},
    {label:"網路世界",data:4,color:"#CA8EFF"},
    {label:"國家賠償",data:4,color:"#DCB5FF"},
    {label:"支付命令",data:0,color:"#E6CAFF"}
  ]

  ref.set({
    Charts:Chart
  },{merge: true}).then(() => {
    alert('資料成功更新');
  });
}


