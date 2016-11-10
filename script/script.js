$("#container").ready(function() {
  /*-----------MENU-----------*/
  $('ul.menu li:has(ul)').mouseenter(function() {
    $(this).find("ul").slideDown("fast");
  }).mouseleave(function() {
    $(this).find("ul").slideUp("fast");
  });
  $('ul.menu li:has(ul) a:first').addClass('with-child');

  /*-----------GESTION URL-----------*/
  var ancre = window.location.hash.substr(1);
  switch (ancre) {
    case 'accueil':
      $('#container').load('./index.html #container', loadGalery);
      break;
    case 'projet':
      $('#container').load('./pages/projet.html #container', loadGalery);
      break;
    case 'galery':
      $('#container').load('./pages/galery.html #container', loadGalery);
      break;
    case 'contact':
      $('#container').load('./pages/form.html #container', loadGalery);
      break;
    default:
      $('#container').load('./index.html #container', loadGalery);
  }

  /*-----------BOUTON TOP-----------*/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#go-top-container').fadeIn();
    } else {
      $('#go-top-container').fadeOut();
    }
  });
  $('#go-top-container').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});


var loadForm = function() {
  $("#contact").guardian({
    failure: function() {
      $.sweetModal({
        theme: $.sweetModal.THEME_DARK,
        content: 'Il y a ' + this.getInvalid().length + ' erreurs !',
        title: 'Erreur !',
        icon: $.sweetModal.ICON_ERROR,

        buttons: [{
          label: 'Ok',
          classes: 'redB'
        }]
      });
    },
  });
}

var loadGalery = function(){
  $("img").ready(function(){
    $("#viewContainer").click(function(){
      $(this).fadeOut();
    });
    $("img").click(function(){
      $("#view img").attr("src", $(this).attr("src"));
      $("#viewContainer").fadeIn();
    });
  });
}
