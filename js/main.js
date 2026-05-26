
function bmiCalc(){
 let h=document.getElementById('height').value/100;
 let w=document.getElementById('weight').value;
 if(h&&w){
  let bmi=(w/(h*h)).toFixed(1);
  document.getElementById('bmi').innerHTML='BMI指数：'+bmi;
 }
}
function sign(el){el.classList.toggle('active')}
function game(){
 let arr=['坐姿优秀','抬头挺胸','肩膀放松','保持脊柱自然','放松','深呼吸'];
 document.getElementById('result').innerText=arr[Math.floor(Math.random()*arr.length)];
}
window.onload=function(){
 if(document.getElementById('chart')){
 var c=echarts.init(document.getElementById('chart'));
 c.setOption({
  xAxis:{type:'category',data:['周一','周二','周三','周四','周五','周六','周日']},
  yAxis:{type:'value'},
  series:[{data:[70,80,82,88,90,95,98],type:'line',smooth:true}]
 });
 }
}


function openModal(id){
document.getElementById(id).style.display='block';
}
function closeModal(id){
document.getElementById(id).style.display='none';
}
function switchModal(closeId,openId){
closeModal(closeId);
openModal(openId);
}
window.onclick=function(e){
document.querySelectorAll('.modal').forEach(modal=>{
if(e.target===modal){
modal.style.display='none';
}
});
}


let currentSlide=0;
const slides=document.querySelectorAll('.slide');

function showSlide(index){
slides.forEach(slide=>slide.classList.remove('active'));
slides[index].classList.add('active');
}

setInterval(()=>{
if(slides.length>0){
currentSlide=(currentSlide+1)%slides.length;
showSlide(currentSlide);
}
},3000);
