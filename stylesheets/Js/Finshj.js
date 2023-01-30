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
var MessageContent = document.getElementById("showAll");
var Rest = document.querySelector('.cet');
var updateID = String;
var $content = $('#content'),
    $btn = $('#btn'),
    $show = $('#show'),
    ms = new Date().getTime();
var update = document.querySelector('.modal-footer')
const pageid = document.getElementById('pageid');
$(document).ready(function(){
  var db = firebase.firestore();
  var ref =db.collection("個人資料");
  var data2 =[];
  var KH=[];
  ref.onSnapshot(querySnapshot => {
    querySnapshot.forEach(doc => {
      data2.push(doc.data());
      data2 = data2.sort(function (a, b) {
        return b.score - a.score;
      });
      newData.push({id:doc.id,data:doc.data()});
    });
    for(var i=0;i<data2.length;i++){
      KH.push(data2[i]);
    }
    pagination(KH,1);
  });
  function pagination(KH,nowPage){
    const dataTotal =KH.length;
    const perpage = 20;
    const pageTotal = Math.ceil(dataTotal / perpage);
    let currentPage = nowPage;
    if (currentPage > pageTotal) {
      currentPage = pageTotal;
    }
    const minData = (currentPage * perpage) - perpage + 1 ;
    const maxData = (currentPage * perpage) ;
    const data = [];
    KH.forEach((item,index)=>{
      const num = index + 1;
      if ( num >= minData && num <= maxData) {
        data.push(item);
      }
    })
    const page = {
      pageTotal,
      currentPage,
      hasPage: currentPage > 1,
      hasNext: currentPage < pageTotal,
    }
    displayData(data);
    pageBtn(page);
  }
  function displayData(data) {
    let str = '';
    data.forEach((item) => {
        str +=
        `<tr class='slow' data-item="${item.name}">
        <td class='text-center' data-item="${item.name}">${item.name}</td>
        <td class='text-center' data-item="${item.name}">${item.case}</td>
        <td class='text-center' data-item="${item.name}">${item.Charts[0].label}(${item.Charts[0].data}%)<br>${item.Charts[1].label}(${item.Charts[1].data}%)<br>${item.Charts[2].label}(${item.Charts[2].data}%)<br></td>
        <td class='text-center' data-item="${item.name}">${item.YearsPractice}</td>
        </tr>`;
      });
    list.innerHTML=str;
  }
  function pageBtn (page){
    let str = '';
    const total = page.pageTotal;
    
    if(page.hasPage) {
      str += `<li class="page-item"><a class="page-link" href="#" data-page="${Number(page.currentPage) - 1}"><</a></li>`;
    } else {
      str += `<li class="page-item disabled"><span class="page-link"><</span></li>`;
    }
    
  
    for(let i = 1; i <= total; i++){
      if(Number(page.currentPage) === i) {
        str +=`<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
      } else {
        str +=`<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
      }
    };
  
    if(page.hasNext) {
      str += `<li class="page-item"><a class="page-link" href="#" data-page="${Number(page.currentPage) + 1}">></a></li>`;
    } else {
      str += `<li class="page-item disabled"><span class="page-link">></span></li>`;
    }
    pageid.innerHTML = str;
  }
  function switchPage(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A') return;
    const page = e.target.dataset.page;
    pagination(newData, page);
  }
  pageid.addEventListener('click', switchPage);
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
$(list).delegate(`tr`, `click`, function (e){
  var pie=[];
  var color=[];
  var dataSc=[];
  for(var i=0; i<newData.length;i++){
    if(e.target.dataset.item==newData[i].data.name){
      for(var k=0; k<25;k++){
        color.push(newData[i].data.Charts[k].color);
        pie.push({label:newData[i].data.Charts[k].label,value:newData[i].data.Charts[k].data});
        dataSc.push([newData[i].data.Charts[k].label,newData[i].data.Charts[k].data])
      }
      Highcharts.chart('container', {
        chart: {
            styledMode: true
        },
        title: {
            text: ''
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        series: [{
            type: 'pie',
            allowPointSelect: true,
            keys: ['name', 'y', 'selected', 'sliced'],
            data: dataSc,
            showInLegend: true
        }]
      });
      document.getElementById('pageid').style.display="none";
      document.querySelector('.admin').style.display="block";
      document.querySelector('.content').style.display="block";
      document.querySelector('.oneDate').style.display="block";
      document.querySelector('.content-search').style.display="none";
      document.querySelector('.mobile').style.display="none";
      document.getElementById("name").innerHTML = newData[i].data.name+'律師';
      document.getElementById("lawyerNo").innerHTML = newData[i].data.lawyerNo;
      document.getElementById("gender").innerHTML = newData[i].data.gender;
      document.getElementById("year").innerHTML ='民國'+ newData[i].data.year+'年';
      document.getElementById("YearsPractice").innerHTML =newData[i].data.YearsPractice;
      document.querySelector(".score").innerHTML = newData[i].data.score;
      document.getElementById("case").innerHTML =newData[i].data.case;
      document.getElementById("news").innerHTML =newData[i].data.news;
      document.getElementById("work").innerHTML =newData[i].data.work;
      document.getElementById("address").innerHTML =newData[i].data.address;
      updateID=newData[i].id;
    }
  }
  var database = firebase.database().ref(updateID);
  var Cont = [];
  var str ='';
  var strAll ='';
  var num = String;
  database.once('value', function(snapshot) {
      $show.html('');
      for(var i in snapshot.val()){
        document.querySelector('.show2').style.display="none";
        Cont.push(snapshot.val()[i]);
      }
      for(var k=0;k<Cont.length;k++){
        Cont = Cont.sort(function (a,b){
            return a.time > b.time ? 1 : -1;
        })
        num=Cont.length;
        document.getElementById('num').innerHTML=num;
        if(snapshot.val()==null){
        }else if(snapshot.val()!=null && Cont.length >5){
          strAll +='<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[k].content+'<span>'+'<br>'+'<small>'+Cont[k].time+'<small>'+'</div>'+'</li>';
          MessageContent.innerHTML = strAll;
        } else if(Cont.length <= 5){
          document.querySelector('.hide-content').style.display="none";
          $show.append('<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[k].content+'<span>'+'<br>'+'<small>'+Cont[k].time+'<small>'+'</div>'+'</li>');
        }
      }
      if(snapshot.val()==null){
        document.querySelector('.hide-content').style.display="none";
      }else if(snapshot.val()!=null && Cont.length >5){
        str +='<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-5].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-5].time+'<small>'+'</div>'+'</li>'+
        '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-4].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-4].time+'<small>'+'</div>'+'</li>'+
        '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-3].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-3].time+'<small>'+'</div>'+'</li>'+
        '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-2].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-2].time+'<small>'+'</div>'+'</li>'+
        '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-1].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-1].time+'<small>'+'</div>'+'</li>'
        $show.append(str);
      }
  });
  $(document).ready(function(){
    $(".hide-content").click(function(event){
      $("#showAll").toggle();
      $('#show').toggle();
      event.preventDefault();
    });
  });
})
$(update).delegate(`.check`,`click`,function(){
var db = firebase.firestore();
var ref = db.collection("個人資料").doc(updateID);
var database = firebase.database().ref(updateID);
var newNumber = document.querySelector(".score2").innerHTML;
var date = new Date();
    var y = date.getFullYear();
    var M = date.getMonth()+1;
    var d = date.getDate();
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
    var now =y+'/'+M+'/'+d+' '+h+':'+m+':'+s;
    var postData = {
      content:$('#content').val(),
      time:now,
      id:'id'+ms
    };
    if($('#content').val()=="" || newNumber==''){
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
    // $content.val('');
    ref.update({
      score:newNumber
    }).then(() => {
      alert('成功送出');
      $('#staticBackdrop').modal('hide')
      var database = firebase.database().ref(updateID);
      var Cont = [];
      var str ='';
      var strAll ='';
      var num = String;
      database.on('value', function(snapshot) {
          $show.html('');
          for(var i in snapshot.val()){
            document.querySelector('.show2').style.display="none";
            Cont.push(snapshot.val()[i]);
          }
          for(var k=0;k<Cont.length;k++){
            Cont = Cont.sort(function (a,b){
                return a.time > b.time ? 1 : -1;
            })
            num=Cont.length;
            document.getElementById('num').innerHTML=num;
            if(snapshot.val()==null){
            }else if(snapshot.val()!=null && Cont.length >5){
              strAll +='<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[k].content+'<span>'+'<br>'+'<small>'+Cont[k].time+'<small>'+'</div>'+'</li>';
              MessageContent.innerHTML = strAll;
            } else if(Cont.length <= 5){
              document.querySelector('.hide-content').style.display="none";
              $show.append('<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[k].content+'<span>'+'<br>'+'<small>'+Cont[k].time+'<small>'+'</div>'+'</li>');
            }
          }
          if(snapshot.val()==null){
            document.querySelector('.hide-content').style.display="none";
          }else if(snapshot.val()!=null && Cont.length >5){
            str +='<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-5].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-5].time+'<small>'+'</div>'+'</li>'+
            '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-4].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-4].time+'<small>'+'</div>'+'</li>'+
            '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-3].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-3].time+'<small>'+'</div>'+'</li>'+
            '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-2].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-2].time+'<small>'+'</div>'+'</li>'+
            '<li>'+'<div class="">'+'<i class="fas fa-user-circle i-size" title="匿名"></i>：'+'<span class="list-p">'+Cont[Cont.length-1].content+'<span>'+'<br>'+'<small>'+Cont[Cont.length-1].time+'<small>'+'</div>'+'</li>'
            $show.append(str);
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

// function order(){
//   var db = firebase.firestore();
//   var ref =db.collection("個人資料");
//   var data =[];
//   ref.onSnapshot(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       data.push(doc.data());
//       data = data.sort(function (a, b) {
//         return b.score - a.score;
//       });
//       newData.push({id:doc.id,data:doc.data()});
//     });
//     var str ='';
//     for(var i=0; i<data.length;i++){
//       str +='<li>'+"<a href='#' class='slow' data-item="+data[i].name+">"+'名稱：'+data[i].name+'</a>'+'&nbsp;'+'<span>'+'分數：'+data[i].score+'</span>'+'</li>'
//     }
//     list.innerHTML=str;
//   });
// }
// $(Rest).delegate(`.Rester`, `click`, function (){
//   $(".star").removeClass("selected");
//   clearInterval(responseMessage);
//   document.querySelector(".score2").innerHTML = "";
//   document.querySelector('.score').style.display="inline-block";
//   order();
//   document.querySelector('.search-list').style.display="block";
//   document.querySelector('.oneDate').style.display="none";
//   document.getElementById("show").style.display="none";
//   document.querySelector('.show2').style.display="none";
// })
