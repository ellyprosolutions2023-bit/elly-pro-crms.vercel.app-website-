document.getElementById('y')&&(document.getElementById('y').textContent=new Date().getFullYear());
var m=document.getElementById('menu'),n=document.getElementById('nav');
m&&m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o)});
var f=document.getElementById('wa-form');
f&&f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var t='Hello Elly Pro Solutions, I am '+d.get('name')+' from '+(d.get('biz')||'my business')+'. I am interested in: '+d.get('need')+'.'+(d.get('msg')?' '+d.get('msg'):'')+(d.get('phone')?' You can reach me on '+d.get('phone')+'.':'');
window.open('https://wa.me/254797373462?text='+encodeURIComponent(t),'_blank','noopener')});
