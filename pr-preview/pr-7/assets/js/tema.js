/* Kithara · tema claro (Musageta) e escuro (Bronze).
   - 1ª visita: segue o sistema (prefers-color-scheme).
   - O botão #mode alterna e salva a escolha em localStorage("kth-mode").
   Carregado no <head>, sem defer, para aplicar o tema antes da pintura. */
(function(){
  var KEY="kth-mode", root=document.documentElement, m=null;
  try{m=localStorage.getItem(KEY)}catch(e){}
  if(m!=="dark"&&m!=="light"){
    m=(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light";
  }
  root.setAttribute("data-mode",m);

  var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function wire(){
    var b=document.getElementById("mode");
    if(!b) return;
    function paint(){
      var d=root.getAttribute("data-mode")==="dark";
      b.innerHTML=d?SUN:MOON;
      b.setAttribute("aria-label",d?"Mudar para o tema claro (Musageta)":"Mudar para o tema escuro (Bronze)");
    }
    paint();
    b.addEventListener("click",function(){
      var n=root.getAttribute("data-mode")==="dark"?"light":"dark";
      root.setAttribute("data-mode",n);
      try{localStorage.setItem(KEY,n)}catch(e){}
      paint();
      try{document.dispatchEvent(new CustomEvent("kth-mode",{detail:n}))}catch(e){}
    });
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",wire);
  else wire();
})();
