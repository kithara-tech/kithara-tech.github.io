/* Kithara · comportamento comum.
   Acende na barra de abas (.ktabs[data-spy]) a seção que está na tela.
   Todo o conteúdo funciona sem este script. */
(function(){
  var nav=document.querySelector(".ktabs[data-spy]");
  if(!nav||!("IntersectionObserver" in window)) return;
  var links=[].slice.call(nav.querySelectorAll('a[href^="#"]'));
  var secs=links.map(function(a){return document.getElementById(a.getAttribute("href").slice(1));});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var i=secs.indexOf(e.target);
      links.forEach(function(l,j){l.classList.toggle("on",j===i);});
      var a=links[i];
      if(a) nav.scrollTo({left:a.offsetLeft-nav.clientWidth/2+a.clientWidth/2,behavior:"smooth"});
    });
  },{rootMargin:"-40% 0px -55% 0px"});
  secs.forEach(function(s){if(s)io.observe(s);});
})();
