
const dropdown = function({ donde, id, valorinicial, options }) {
	// INYECTA CSS
	$(`${donde}`).append(`
		<style type="text/css">
			.dropdown[data-id="${id}"] {
				position: relative;
				z-index: 5;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.dropdown[data-id="${id}"].arriba {
				z-index: 6;
			}
			.dropdown[data-id="${id}"] > .inicial {
				width: 100%;
				background-color: white;
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;
				z-index: 3;
				gap: 10px;
				cursor: pointer;
				border: 1px solid #ddd;
				border-radius: 15px;
				padding: 10px 20px;
			}
			.dropdown[data-id="${id}"] > .inicial > p {
				margin: 0;
			}
			.dropdown[data-id="${id}"] > .inicial > img {
				width: 10px;
			}
			.dropdown[data-id="${id}"] > .opciones {
				width: 100%;
				position: absolute;
				z-index: 2;
				background: white;
				top: 0;
				padding-top: 45px;
				border: 1px solid #ddd;
				width: 100%;
				border-radius: 15px 15px 0 0;
			}
			.dropdown[data-id="${id}"] > .opciones > p {
				margin: 0;
				cursor: pointer;
				padding: 6px 20px;
			}
			.dropdown[data-id="${id}"] > .opciones > p:hover {
				background-color: whitesmoke;
			}
			select[data-id="${id}"] {
				display: none;
			}
		</style>
	`);

	// INYECTA DROPDOWN's
	$(`${donde}`).addClass("dropdown");
	$(`${donde}`).attr("data-id", id);
	$(`${donde}`).append(`
		<div class="inicial">
			<p>${valorinicial}</p>
			<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNy41IDEyTDAgNGgxNWwtNy41IDhaIi8+PC9zdmc+" alt="Elige una opción">
		</div>
		<div class="opciones"></div>
		
		<select data-id="${id}"></select>
	`);
	
	// INYECTA DATA DEL SELECT
	$(`select[data-id=${id}]`).append(`<option value='${valorinicial}'>${valorinicial}</option>`)
	for ( let count = 0; count <= options.length-1; count++ ) {
		const value = options[ count ];
		$(`div[data-id=${id}] .opciones`).append(`<p>${value}</p>`);
		$(`select[data-id=${id}]`).append(`<option value='${value}'>${value}</option>`)
	};
	
	$(`div[data-id=${id}] > .opciones`).css("display", "none");
	$(`div[data-id=${id}] > .inicial`).on("click", function(){
		$(`div[data-id=${id}] > .opciones`).toggle();
		$(this).parent().toggleClass("arriba");
	});
	
	$(`div[data-id=${id}] > .opciones > p`).on("click", function(){
		// FRONT
		const seleccionado = $(this).html();
		$(`div[data-id=${id}] > .inicial`).html( `
			<p>${seleccionado}</p>
			<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAxNSAxNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNy41IDEyTDAgNGgxNWwtNy41IDhaIi8+PC9zdmc+" alt="Elige una opción">
		`);
		
		$(`div[data-id=${id}] > .opciones`).css("display", "none");
		$(this).parent().parent().toggleClass("arriba");

		// BACK
		$(`select[data-id=${id}]`).val( seleccionado );
	});
};

const tooltip = function({ donde, id, direccion, mensaje, mensajetooltip }) {
	$(`${donde}`).html(`
		<div data-id="${id}">
			<style type="text/css">
				[data-id=${id}] {
					position: relative;
					display: inline-block;
					border-bottom: 1px dotted #ccc;
					color: #006080;
				}
				[data-id=${id}] .eltooltiptext {
					visibility: hidden;
					position: absolute;
					width: 120px;
					background-color: #555;
					color: #fff;
					text-align: center;
					padding: 5px 0;
					border-radius: 6px;
					z-index: 1;
					opacity: 0;
					transition: opacity 0.3s;
				}
				[data-id=${id}]:hover .eltooltiptext {
					visibility: visible;
					opacity: 1;
				}
				.tooltip-derecha {
					top: -5px;
					left: 125%;
				}
				.tooltip-derecha::after {
					content: "";
					position: absolute;
					top: 50%;
					right: 100%;
					margin-top: -5px;
					border-width: 5px;
					border-style: solid;
					border-color: transparent #555 transparent transparent;
				}
				.tooltip-abajo {
					top: 135%;
					left: 50%;
					margin-left: -60px;
				}
				.tooltip-abajo::after {
					content: "";
					position: absolute;
					bottom: 100%;
					left: 50%;
					margin-left: -5px;
					border-width: 5px;
					border-style: solid;
					border-color: transparent transparent #555 transparent;
				}
				.tooltip-arriba {
					bottom: 125%;
					left: 50%;
					margin-left: -60px;
				}
				.tooltip-arriba::after {
					content: "";
					position: absolute;
					top: 100%;
					left: 50%;
					margin-left: -5px;
					border-width: 5px;
					border-style: solid;
					border-color: #555 transparent transparent transparent;
				}
				.tooltip-izquierda {
					top: -5px;
					bottom:auto;
					right: 128%;
				}
				.tooltip-izquierda::after {
					content: "";
					position: absolute;
					top: 50%;
					left: 100%;
					margin-top: -5px;
					border-width: 5px;
					border-style: solid;
					border-color: transparent transparent transparent #555;
				}
			</style>
			${mensaje}
			<span class="eltooltiptext tooltip-${direccion}">${mensajetooltip}</span>
		</div>
	`);
};