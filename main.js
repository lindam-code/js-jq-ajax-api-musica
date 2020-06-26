$(document).ready(function() {
	$.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data) {
        // Creo un array di cd della chiamata Ajax
        var arrayCd = data.response;
        for (var i = 0; i < arrayCd.length; i++) {
          // Creo variabile per singolo cd
          var singleCd = arrayCd[i];
          // Popolare l'html con i cd della chiamata Ajax
          var source = $('#cd-template').html();
          var template = Handlebars.compile(source);
          var html = template(singleCd);
          $('.cds-container').append(html);
        }
      },
      error: function(data, status, errorType) {
        alert('errore: ' + errorType);
      }
    }
  );
});
