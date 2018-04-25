var navbar = document.getElementById('navbar-btn');
var navbarSupport = document.getElementById('navbarSupportedContent');

if(navbar){
    navbar.addEventListener('click', function() {
        navbar.className -= "collapsed";
        navbar.setAttribute("aria-expanded",true)
        navbarSupport.className -= "collapse";
        navbarSupport.className += "collapsing";
        setTimeout(function() {
          navbarSupport.className += "collapse show";
        }, 300);
      });
      
}


