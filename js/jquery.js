$(document).ready(function(){

	//colores
	var fondoOpaco = 'rgba(252, 123, 39, 0.55)';

	var fondoOrange = '#fc7b27';

	var colorBlue = '#3aa7e4';

	//hover del menu de medio
	var colorCambiante = $('.cambia');

	var colorFijo = $('#fijo');

/*
	colorCambiante.mouseover(function(){
		$(this).css('background', fondoOrange);
		colorFijo.css('background', fondoOpaco);
	});

	colorCambiante.mouseout(function(){
		$(this).css('background', 'none');
		colorFijo.css('background', fondoOrange);
	});
*/

	function cambiaFondo(){
		$(this).css('background', fondoOrange);
		colorFijo.css('background', fondoOpaco);
	};

	function volverFondo(){
		$(this).css('background', 'none');
		colorFijo.css('background', fondoOrange);
	}

	colorCambiante.hover(cambiaFondo, volverFondo);


	//Mostar y ocultar busqueda avanzada

	$('#oculto').hide();
	$('#ocultar').hide();

	$('#avanzada').click(function(){
		$('#avanzada').hide();
		$('#ocultar').show();

		$('#oculto').slideDown('slow');
		$('#boton').css('display', 'none');
	})

	$('#ocultar').click(function(){
		$('#ocultar').hide();
		$('#avanzada').show();

		$('#oculto').slideUp('slow');
		$('#boton').css('display', 'block');
	})

	

	//hover botones ambientes
	function sobreBtn(){
		$(this).css('background', fondoOrange)
			  .css('color', 'white')
			  .css('font-weight', 'bold');
	}

	function fueraBtn(){
		$(this).css('background', 'white')
			   .css('color', fondoOrange);
	}

	$('.btn-ambientes').hover(sobreBtn, fueraBtn);

	//botones de mapa y lista
	var listado = $('#listado');
	var mapa = $('#mapa');

	listado.click(function(){
		$(this).css('background', colorBlue)
				.css('color', 'white');

		mapa.css('background', 'white')
			.css('color', 'black');
	})

	mapa.click(function(){
		$(this).css('background', colorBlue)
			.css('color', 'white');

		listado.css('background', 'white')
			.css('color', 'black');
	})


})