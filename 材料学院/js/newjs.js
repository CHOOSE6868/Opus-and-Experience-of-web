
var fav = document.getElementById('favorite');
fav.addEventListener('click',
function addFavorite2() {
     var url = window.location;
      var title = document.title;
      var ua = navigator.userAgent.toLowerCase();
           if (ua.indexOf("360se") > -1) {

        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
             }
             else if (ua.indexOf("msie 8") > -1) {
                 window.external.AddToFavoritesBar(url, title); //IE
             }

    else if (document.all) {
       try{

   window.external.addFavorite(url, title);
      }catch(e){
       alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');

  }

    }

    else if (window.sidebar) {

        window.sidebar.addPanel(title, url, "");

    }
         else {
       alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
         }
     }
);
!function(){ function n(n,e,t){ return n.getAttribute(e)||t } function e(n){ return document.getElementsByTagName(n) } function t(){ var t=e("script"),o=t.length,i=t[o-1]; return{ l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.5),c:n(i,"color","0,0,0"),n:n(i,"count",99) } } function o(){ a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth, c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight } function i(){ r.clearRect(0,0,a,c); var n,e,t,o,m,l; s.forEach(function(i,x){ for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,1,1),e=x+1;e<u.length;e++)n=u[e], null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y, l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m), t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke())) }), x(i) } var a,c,u,m=document.createElement("canvas"), d=t(),l="c_n"+d.l,r=m.getContext("2d"), x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame|| function(n){ window.setTimeout(n,1e3/45) }, w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o, window.onmousemove=function(n){ n=n||window.event,y.x=n.clientX,y.y=n.clientY }, window.onmouseout=function(){ y.x=null,y.y=null }; for(var s=[],f=0;d.n>f;f++){ var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3}) } u=s.concat([y]), setTimeout(function(){i()},100) }();
window.onload = function(){
	var btn1 = document.getElementById('btn1');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var istop = true;

	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop>= clientHeight){
			btn1.style.display = 'block';

		}else{
			btn1.style.display = 'none';
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
	btn1.onclick = function () {
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor(-osTop/6);
			var osTop = document.documentElement.scrollTop = document.body.scrollTop=osTop+speed;
		    isTop = true;
		    if(osTop==0){
		    	clearInterval(timer);
		    }
		},30);
	}
}