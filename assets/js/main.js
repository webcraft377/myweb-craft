// keep existing interactions; no change required but ensure accessibility improvements
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', function(){
    if(nav.style.display==='flex') nav.style.display='none'; else nav.style.display='flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length>1){
        var el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    });
  });
});
