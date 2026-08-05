/* =====================================
   OYECARD - SERVICE WORKER
   ===================================== */


const CACHE_NAME = "oyecard-v1";


const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./manifest.json",

    "./css/style.css",

    "./css/variables.css",

    "./css/responsive.css",

    "./css/animations.css",

    "./js/app.js",

    "./assets/img/profile.webp",

    "./assets/img/cover.webp",

    "./assets/img/logo.svg",

    "./assets/img/qr.png",

    "./contact/Monica_Castro.vcf"

];



/*
=====================================
INSTALACIÓN
=====================================
*/


self.addEventListener(
    "install",
    event => {


        event.waitUntil(

            caches.open(CACHE_NAME)

            .then(
                cache => {

                    return cache.addAll(
                        FILES_TO_CACHE
                    );

                }

            )

        );


        self.skipWaiting();


    }

);




/*
=====================================
ACTIVACIÓN
=====================================
*/


self.addEventListener(
    "activate",
    event => {


        event.waitUntil(

            caches.keys()

            .then(
                cacheNames => {


                    return Promise.all(

                        cacheNames.map(

                            cacheName => {


                                if(
                                    cacheName !== CACHE_NAME
                                ){

                                    return caches.delete(
                                        cacheName
                                    );

                                }


                            }

                        )

                    );


                }

            )

        );


        self.clients.claim();


    }

);





/*
=====================================
FETCH
=====================================
*/


self.addEventListener(
    "fetch",
    event => {


        event.respondWith(


            caches.match(
                event.request
            )

            .then(

                response => {


                    return response ||

                    fetch(
                        event.request
                    );


                }

            )


        );


    }

);
