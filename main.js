$(document).ready(function() {

	// Chiamata per mostrare i cd
	$.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data) {

				// Creo un array di cd della chiamata Ajax
				var arrayCd = data.response;
				// Stampo i cd in base al gener musicale scelto richiamando una funzione
				showCd(arrayCd);

				// Registro la scelta del genere musicale dell'utente
				$('.select-genre').change(function(){
					var selectedGenre = $(this).val();

					// Controllo il genere di ogni cd e lo mostro solo se uguale al genere scelto
					// se l'utente non sceglie niente, mostro tutti i cd
					$('.cd').each(function(){
						var cdGenre = $(this).attr('data-genre').toLowerCase();
						if (selectedGenre === 'all') {
							$('.cd').show();
						} else if (cdGenre === selectedGenre) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				});

      },
      error: function(data, status, errorType) {
        alert('errore: ' + errorType);
      }
    }
  );

	// Funzione per far vedere a schermo i cd
	function showCd(arrayCd){
		// Popolare l'html con i cd della chiamata Ajax
		var source = $('#cd-template').html();
		var template = Handlebars.compile(source);
		// Scorro l'array per vedere ogni singolo cd
		for (var i = 0; i < arrayCd.length; i++) {
			// Creo variabile per singolo cd
			var singleCd = arrayCd[i];
			// Compilo il template
			var html = template(singleCd);
			// Appendo il template compilato alla pagina
			$('.cds-container').append(html);
			};
	};

});
