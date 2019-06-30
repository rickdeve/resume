$("document").ready(function () {
    /*Al hacer scroll hacia abajo cambia automaticamente de color*/
    $(window).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    /*Inicia la libreria del efecto scroll al dar hacia abajo*/
    AOS.init();
    /*Esta funcion ayuda a que cuando demos click a un enlace del nav se vaya directamente a aesa seccion*/
    /*var scroll = new SmoothScroll('a[href*="#"]');*/  
    /*Le damos un efecto a las barras de las skills*/
    $(".progress-bar").addClass("animated heartBeat delay-3s");

    /*Por si damos click a mi imagen de perfil, se cambia a otra haciendo el efecto distorcion*/
    $("#profile").mouseenter(function () {
        $(this).attr('src', 'assets/img/perfil3.jpg');

    });
    $("#profile").mouseleave(function () {
        $(this).attr('src', 'assets/img/profile.JPG');

    });
    /*Simplemente al dar click al boton  abrimos el modal con imagen*/
   /* $('.btn-success').click(function () {
        $('#exampleModalCenter').modal('show');
    });*/
    /*Esta funcion es para detectar cada una de las experiencias y al dar click al leer mas se abre o se cierra para cada una*/
    $('.more').each(function () {
        var $this = $(this);
        $this.on("click", function () {

            if ($(this).data('id') == 1) {
                $(".complete1").toggle();
                // cambiar el texto del boton dependiendo del texto actual
                if ($(this).text() == "Leer menos...") {
                    $(this).text("Leer mas...");
                } else {
                    $(this).text("Leer menos...");
                }
            } else if ($(this).data('id') == 2) {
                $(".complete2").toggle();
                // cambiar el texto del boton dependiendo del texto actual
                if ($(this).text() == "Leer menos...") {
                    $(this).text("Leer mas...");
                } else {
                    $(this).text("Leer menos...");
                }
            }
            else if ($(this).data('id') == 3) {
                $(".complete3").toggle();
                // cambiar el texto del boton dependiendo del texto actual
                if ($(this).text() == "Leer menos...") {
                    $(this).text("Leer mas...");
                } else {
                    $(this).text("Leer menos...");
                }
            } else if ($(this).data('id') == 4) {
                $(".complete4").toggle();
                // cambiar el texto del boton dependiendo del texto actual
                if ($(this).text() == "Leer menos...") {
                    $(this).text("Leer mas...");
                } else {
                    $(this).text("Leer menos...");
                }
            } else if ($(this).data('id') == 5) {
                $(".complete5").toggle();
                // cambiar el texto del boton dependiendo del texto actual
                if ($(this).text() == "Leer menos...") {
                    $(this).text("Leer mas...");
                } else {
                    $(this).text("Leer menos...");
                }
            }

        });
    });


    /*$("#caption").mouseover(function () {
        $("#caption").css("background-color", "yellow");
    });
    $("#caption").mouseout(function () {
        $("#caption").css("background-color", "yellow");
    });*/


});