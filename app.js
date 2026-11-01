(function(){
var s=document.getElementById('share'),q=document.getElementById('qrbtn'),f=document.getElementById('qr');
s.addEventListener('click',function(){
  var d={title:'Ahmed Ibrahim Hassan — NavCom Engineer',text:'Ahmed Ibrahim Hassan — NavCom Engineer | Marine Electronics',url:location.href.split('#')[0]};
  if(navigator.share){navigator.share(d).catch(function(){});}
  else if(navigator.clipboard){navigator.clipboard.writeText(d.url).then(function(){s.lastChild.textContent='Link copied';setTimeout(function(){s.lastChild.textContent='Share'},1800)});}
});
var qi=document.getElementById('qrimg');
try{var qq=qrcode(0,'M');qq.addData(location.href.split('#')[0].split('?')[0]);qq.make();qi.src=qq.createDataURL(8,4);}catch(e){}
q.addEventListener('click',function(){var o=f.hidden;f.hidden=!o;q.setAttribute('aria-expanded',String(o));if(o)f.scrollIntoView({behavior:'smooth',block:'center'});});
})();
