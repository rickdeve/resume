$("document").ready(function () {
     /*Esta funcion es para detectar cada una de las experiencias y al dar click al leer mas se abre o se cierra para cada una*/
     $('.btn-success').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            alert($(this).data('id'));
            if ($(this).data('id') == "pizza") {
                $('#exampleModalCenter').modal('show');
                $('#exampleModalLongTitle').text("Proyecto Pizza Happy");
                $('#img1').attr('src', 'assets/img/Captura.JPG');
                $('#img2').attr('src', 'assets/img/Captura2.JPG');
                $('#img3').attr('src', 'assets/img/Captura3.JPG');
                $('#img4').attr('src', 'assets/img/Captura4.JPG');
               
            } else if ($(this).data('id') == "marketing") {
                $('#exampleModalCenter').modal('show');
                $('#exampleModalLongTitle').text("Proyecto Marketing");
                $('#img1').attr('src', 'assets/img/marketing.JPG');
                $('#img2').attr('src', 'assets/img/marketing2.JPG');
                $('#img3').attr('src', 'assets/img/marketing3.JPG');
                $('#img4').attr('src', 'assets/img/marketing4.JPG');
            }
            else if ($(this).data('id') == "ETL") {
                $('#exampleModalCenter').modal('show');
                $('#exampleModalLongTitle').text("Proyecto ETL");
                $('#img1').attr('src', 'assets/img/etl.JPG');
                $('#img2').attr('src', 'assets/img/etl2.JPG');
                $('#img3').attr('src', 'assets/img/etl3.JPG');
                $('#img4').attr('src', 'assets/img/etl4.JPG');
            } else if ($(this).data('id') == "landingET") {
                $('#exampleModalCenter').modal('show');
                $('#exampleModalLongTitle').text("Landing Page");
                $('#img1').attr('src', 'assets/img/landet.JPG');
                $('.2').remove();
                $('.3').remove();
                $('.4').remove();
               
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
    $("#cerrar").click(function(){
        
    });

});