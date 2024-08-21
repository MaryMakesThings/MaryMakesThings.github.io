let H = window.innerHeight

let W = window.innerWidth

if ( W == 600 ) {
    document.getElementsByClassName( "basicclass1" ).style.marginleft = "40";
    document.getElementsByClassName( "basicclass1" ).style.marginright = "40";
}

if ( W < 600 ) {
    document.getElementsByClassName( "basicclass1").style.marginright = "40";
    document.getElementsByClassName( "basicclass1").style.marginleft = "40";
}
