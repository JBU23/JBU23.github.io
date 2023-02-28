const boton = document.getElementById("download-palera1n");

boton.addEventListener("click", function() {
    Swal.fire({
		html: '<iframe src="https://palera1ngui.tk/useful-info.html#features6-1l" width="100%" height="500px>"</iframe>',
		position: "top",
        width: '100%',
        footer: 'Fuente: <a href="https://palera1ngui.tk/" target="_blank" rel="noopener noreferrer"> https://palera1ngui.tk/</a>',
		timerProgressBar: false,
		allowOutsideClick: true,
		allowEscapeKey: true,
		allowEnterKey: true,
		showConfirmButton: true,
		showClass: {
		  popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
		  popup: 'animate__animated animate__fadeOutUp'
		}
	  })
  });