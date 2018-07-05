$("#accueil, #pourquoi, #entreprise, #demarche, #qui, #ethique, #respect, #verite, #contact, #logo").click(function(event) {
  document.getElementById(event.target.id).submit();
});
