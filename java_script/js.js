function darkmode (obj) {
    obj.style.backgroundColor='#000';
    obj.style.color='#fff';
var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="hidden";
var light=obj.getElementsByClassName("light");
    light[0].style.visibility="visible";
    
  var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#000";
       t[i].style.border="2px solid white"    
    }
var td=obj.querySelectorAll("td");
for(i=0;i<td.length;i++){
     td[i].style.border="2px solid white"    
  }
  var th=obj.querySelectorAll("th");
for(i=0;i<th.length;i++){
     th[i].style.border="2px solid white"    
  }
  var tr=obj.querySelectorAll("tr");
for(i=0;i<tr.length;i++){
     tr[i].style.border="2px solid white"    
  }
  var div=obj.querySelectorAll("div");
  for(i=0;i<(div.length-1);i++){
    div[i].style.border="2px solid white";  
    div[i].style.backgroundColor="#000"; 
    div[i].style.color="white";   }
    var cl=obj.getElementsByClassName("clupl");
    for(i=0;i<cl.length;i++){
        cl[i].style.border="2px solid white";  
        cl[i].style.backgroundColor="#000";
        cl[i].style.color="#fff"}
}


function lightmode (obj){
    
    obj.style.backgroundColor='#fff';
    obj.style.color='#000';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="hidden";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="visible";

    var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#fff";
       t[i].style.border="2px solid black" }

    var td=obj.querySelectorAll("td");
    for(i=0;i<td.length;i++){
        td[i].style.border="2px solid black"    
    }
    var th=obj.querySelectorAll("th");
    for(i=0;i<th.length;i++){
         th[i].style.border="2px solid black"    
      }
      var tr=obj.querySelectorAll("tr");
    for(i=0;i<tr.length;i++){
         tr[i].style.border="2px solid black"    
      }
      var div=obj.querySelectorAll("div");
      for(i=0;i<(div.length-1);i++){
        div[i].style.border="2px solid black";  
        div[i].style.backgroundColor="#eee"; 
        div[i].style.color="black";   }
        var cl=obj.getElementsByClassName("clupl");
        for(i=0;i<cl.length;i++){
            cl[i].style.border="2px solid black";  
            cl[i].style.backgroundColor="#fff";
            cl[i].style.color="#000"}
      var nav = obj.getElementsByTagName("nav");
       nav[0].style.backgroundColor="#bb0000";
      var foot= obj.querySelectorAll('table.footer');
      for(i=0;i<foot.length;i++){
       foot[i].style.border='0';}


    

}


   function darkmode2 (obj) {
    obj.style.backgroundColor='#000';
    obj.style.color='#fff';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="visible";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="hidden";

  var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#000";
       t[i].style.border="2px solid white"    
    }

  var tr=obj.querySelectorAll("tr");
for(i=0;i<tr.length;i++){
     tr[i].style.border="1px solid white"    
  }
  var gh=obj.getElementsByClassName("goalerh")
  for(i=0;i<gh.length;i++){
 gh[i].style.color="black";}
 var gtd= obj.querySelectorAll(".goaler td")
 for(i=0;i<gtd.length;i++){
    gtd[i].style.border="1px solid white";}
var gth=obj.querySelectorAll(".goaler th")
for(i=0;i<gth.length;i++){
    gth[i].style.border="1px solid white";}
  var h3= obj.querySelectorAll("h3.most");
  for(i=0;i<h3.length;i++){
  h3[i].style.color="black";}
}

function lightmode2 (obj){
    
    obj.style.backgroundColor='#fff';
    obj.style.color='#000';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="hidden";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="visible";

    var t= obj.querySelectorAll("table");
  for(i=0;i<(t.length-1);i++){
      t[i].style.backgroundColor="#fff";
       t[i].style.border="2px solid black"; }


      var tr=obj.querySelectorAll("tr");
    for(i=0;i<tr.length;i++){
         tr[i].style.borderBottom="1px solid black"  ;  
      }
      var gtd= obj.querySelectorAll(".goaler td")
      for(i=0;i<gtd.length;i++){
         gtd[i].style.border="1px solid black";}
     var gth=obj.querySelectorAll(".goaler th")
     for(i=0;i<gth.length;i++){
         gth[i].style.border="1px solid black";}
      
}

function photo(){
    document.getElementById("semi2").style.display='inline-block';
    document.getElementById("semi").style.display='none';
   
}
function photo2(){
  document.getElementById("semi2").style.display='none';
  document.getElementById("semi").style.display='block';
}
//nouran khaled
function hide1(){
  document.getElementById("hide1").style.display="block";}
function hide2(){
  document.getElementById("hide2").style.display="block";}
function hide3(){
  document.getElementById("hide3").style.display="block";}

  function rhide1(){
      document.getElementById("hide1").style.display="none";}
  function rhide2(){
      document.getElementById("hide2").style.display="none";}
  function rhide3(){
      document.getElementById("hide3").style.display="none";}

      //nancy
      function oblak() {alert("You clicked the goalkeeper!");}
function darkmoden(){
    document.getElementById('body1').style.backgroundColor='#000011';
    document.getElementById('body1').style.color='white';
    document.getElementById('change').style.color='white';
}
function lightmoden(){document.getElementById('body1').style.backgroundColor='white';}
function image1() {document.getElementById('im1').src="../media/images_nam/Flag_of_Spain.png";}
function img1(){document.getElementById('im1').src="../media/images_nam/sevilla.gif";}
function par1(){document.getElementById('p1').style.display='block'}

function image2() {document.getElementById('im2').src="../media/images_nam/Flag_of_the_Netherlands.png";}
function img2(){document.getElementById('im2').src="../media/images_nam/Ajax.png";}
function par2(){document.getElementById('p2').style.display='block'}

function image3() {document.getElementById('im3').src="../media/images_nam/Flag_of_Spain.png";}
function img3(){document.getElementById('im3').src="../media/images_nam/atletico madrid .jpg";}
function par3(){document.getElementById('p3').style.display='block'}

function image4() {document.getElementById('im4').src="../media/images_nam/Flag_of_Belgium.png";}
function img4(){document.getElementById('im4').src="../media/images_nam/RSC_Anderlecht.png";}
function par4(){document.getElementById('p4').style.display='block'}

function image5() {document.getElementById('im5').src="../media/images_nam/Flag_of_Scotland.png";}
function img5(){document.getElementById('im5').src="../media/images_nam/Aberdeen_FC.png";}
function par5(){document.getElementById('p5').style.display='block'}

function image6() {document.getElementById('im6').src="../media/images_nam/Flag_of_Belgium.png";}
function img6(){document.getElementById('im6').src="../media/images_nam/KV_Mechelen.png";}
function par6(){document.getElementById('p6').style.display='block'}

function image7() {document.getElementById('im7').src="../media/images_nam/280px-Flag_of_Romania.png";}
function img7(){document.getElementById('im7').src="../media/images_nam/Fcsb.png";}
function par7(){document.getElementById('p7').style.display='block'}

function image8() {document.getElementById('im8').src="../media/images_nam/Flag_of_Torkia.jpg";}
function img8(){document.getElementById('im8').src="../media/images_nam/Galatasaray.png";}
function par8(){document.getElementById('p8').style.display='block'}

function image9() {document.getElementById('im9').src="../media/images_nam/Flag_of_Italy.png";}
function img9(){document.getElementById('im9').src="../media/images_nam/Lazio.png";}
function par9(){document.getElementById('p9').style.display='block'}

function image10() {document.getElementById('im10').src="../media/images_nam/Flag_of_Spain.png";}
function img10(){document.getElementById('im10').src="../media/images_nam/valencia.gif";}
function par10(){document.getElementById('p10').style.display='block'}

function image11() {document.getElementById('im11').src="../media/images_nam/Flag_of_Italy.png";}
function img11(){document.getElementById('im11').src="../media/images_nam/Parma.png";}
function par11(){document.getElementById('p11').style.display='block';}
function background1(){
    document.getElementById('body1').style.backgroundImage="url('../media/images_nam/background1.jpg')";
    document.getElementById('photo1').style.display='none';
    document.getElementById('photo2').style.display='block';
    document.getElementById('photo3').style.display='block';
    document.getElementById('photo4').style.display='block';
}
function background2(){
    document.getElementById('body1').style.backgroundImage="url('../media/images_nam/background3.jpg')";
    document.getElementById('photo2').style.display='none';
    document.getElementById('body1').style.color='White';
    document.getElementById('photo1').style.display='block';
    document.getElementById('photo3').style.display='block';
    document.getElementById('photo4').style.display='block';
}
function background3(){
    document.getElementById('body1').style.backgroundImage="url('../media/images_nam/background5.jpg')";
    document.getElementById('photo3').style.display='none';
    document.getElementById('photo1').style.display='block';
    document.getElementById('photo2').style.display='block';
    document.getElementById('photo4').style.display='block';
}
function background4(){
    document.getElementById('body1').style.backgroundImage="url('../media/images_nam/background6.jpg')";
    document.getElementById('photo4').style.display='none';
    document.getElementById('photo1').style.display='block';
    document.getElementById('photo2').style.display='block';
    document.getElementById('photo3').style.display='block';
}





//mohmaed omar
var x820= document.getElementById("m-820")
var myimages820=['../media/IMG_20220506_162335.jpg',
'../media/IMG_20220506_162352.jpg',
'../media/wp7245862.webp','../media/p1820.jpg',
'../media/p1820.jpg','../media/p2820.jpg',
'../media/p3820.jpg','../media/p4820.jpg',
'../media/p5820.jpg'];
function changeimage820(x820,myimages){
    setInterval(function(){
        var random820=Math.floor(Math.random()*8);
        x820.style.backgroundImage="url("+myimages[random820]+")";
    },2600);
}
var mousecursor820=document.querySelector('.cursor820');
let links820=document.querySelectorAll('.h-mmo nav a');

window.addEventListener("mousemove",cursor820);

function cursor820(e){
    mousecursor820.style.top=e.pageY+"px";
    mousecursor820.style.left=e.pageX+"px";

}

links820.forEach(l820=> {
    l820.addEventListener("mouseover",() => {
        mousecursor820.classList.add("linkgrow820");
    });
    l820.addEventListener("mouseleave",() => {
        mousecursor820.classList.remove("linkgrow820");
    });
});
   /*======================
   ========================
   ===============================
   =================================*/
//    naira 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// function vis() {
//     var hide = document.getElementsByClassName("hide");
//     for (i = 0; i < hide.length; i++) {
//         hide[i].style.display = "inline-block";
//     }
// }
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


function vis() {
    var hide = document.getElementsByClassName("hide");
    for (i = 0; i < hide.length; i++) {
        hide[i].style.display = "inline-block";
    }
}

/*===================
======================
======================
==================*/
// shawaf
function shawaf(){
    document.getElementById("para815").innerHTML = "" 
   }
   function shawaf2(){
     document.getElementById("paragraphmoe815").innerHTML = ""
   }
