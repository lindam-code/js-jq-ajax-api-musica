$(document).ready(function() {



	// Chiamata per mostrare i cd
	$.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data) {

				// Creo un array di cd della chiamata Ajax
				var arrayCd = data.response;
				// Stampo i cd in base al gener musicale scelto
				showCd(arrayCd);

				// Registro la scelta del genere musicale dell'utente
				$('.select-genre').change(function(){
					var selectedGenre = $(this).val();

					// Controllo il genere di ogni cd e lo mostro solo se uguale al genere scelto
					// se l'utente non scegie niente, li mostro tutti di default 
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

				var html = template(singleCd);
				$('.cds-container').append(html);
			};
	};

});

// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// $('.select-item').change(function(){
//
// 	var selectedGenre = '';
// 	$('.select-item option:selected').each(function(){
// 		selectedGenre += $(this).val();
// 		if (selectedGenre === (singleCd.genre).toLowerCase()) {};
// 	});
// });
