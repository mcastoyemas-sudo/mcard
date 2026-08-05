/* =====================================
   OYECARD - APP.JS
   ===================================== */


document.addEventListener("DOMContentLoaded", () => {


    /*
    =====================================
    DATOS DEL CONTACTO
    =====================================
    */

    const contacto = {

        nombre: "Mónica Castro",

        telefono: "+50688815335",

        whatsapp: "50688815335",

        correo: "mcastro@oyemas.net",

        ubicacion:
        "https://maps.google.com/?q=Hospital+Metropolitano+Escazu",

        tarjeta:
        "contact/Monica_Castro.vcf"

    };



    /*
    =====================================
    BOTÓN WHATSAPP
    =====================================
    */


    const whatsappBtn =
    document.querySelector(".whatsapp");


    if(whatsappBtn){

        whatsappBtn.href =
        `https://wa.me/${contacto.whatsapp}`;

        whatsappBtn.target="_blank";

    }



    /*
    =====================================
    BOTÓN LLAMAR
    =====================================
    */


    const phoneBtn =
    document.querySelector(".phone");


    if(phoneBtn){

        phoneBtn.href =
        `tel:${contacto.telefono}`;

    }



    /*
    =====================================
    BOTÓN CORREO
    =====================================
    */


    const emailBtn =
    document.querySelector(".email");


    if(emailBtn){

        emailBtn.href =
        `mailto:${contacto.correo}`;

    }



    /*
    =====================================
    BOTÓN MAPA
    =====================================
    */


    const mapBtn =
    document.querySelector(".maps");


    if(mapBtn){

        mapBtn.href =
        contacto.ubicacion;

        mapBtn.target="_blank";

    }




    /*
    =====================================
    BOTÓN AGENDAR
    =====================================
    */


    const agendaBtn =
    document.querySelector(".btn-secondary");


    if(agendaBtn){

        agendaBtn.href =
        `https://wa.me/${contacto.whatsapp}?text=Hola,%20quiero%20agendar%20una%20valoración%20auditiva`;

        agendaBtn.target="_blank";

    }



    /*
    =====================================
    COMPARTIR TARJETA
    =====================================
    */


    const compartir = async()=>{


        if(navigator.share){


            await navigator.share({

                title:
                "Mónica Castro | Audióloga",

                text:
                "Te comparto mi tarjeta digital",

                url:
                window.location.href

            });


        }else{


            navigator.clipboard.writeText(
                window.location.href
            );


            alert(
            "Enlace copiado"
            );


        }

    };



    const shareBtn =
    document.querySelector(".share");


    if(shareBtn){

        shareBtn.addEventListener(
            "click",
            compartir
        );

    }




    /*
    =====================================
    ANIMACIONES DE ENTRADA
    =====================================
    */


    const elementos =
    document.querySelectorAll(
        ".hero, .card-action, .card"
    );


    elementos.forEach(
        (elemento,index)=>{


            elemento.style.opacity="0";

            elemento.style.transform=
            "translateY(20px)";


            setTimeout(()=>{


                elemento.style.transition=
                "all .6s ease";


                elemento.style.opacity="1";


                elemento.style.transform=
                "translateY(0)";


            },100 * index);



        }
    );



    /*
    =====================================
    PWA SERVICE WORKER
    =====================================
    */


    if(
        "serviceWorker" in navigator
    ){

        navigator.serviceWorker
        .register(
            "sw.js"
        )

        .then(()=>{

            console.log(
            "OyeCard PWA activa"
            );

        })

        .catch(
            error=>{
                console.log(error);
            }
        );

    }


});
