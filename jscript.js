let H = window.innerHeight

let W = window.innerWidth

if ( W == 600 ) {
    document.getElementsByTagName( "h1" ).style.marginleft = "40";
    document.getElementsByTagName( "h1" ).style.marginright = "40";
}

if ( W < 600 ) {
    document.getElementsByTagName( "h1").style.marginright = "40";
    document.getElementsByTagName( "h1").style.marginleft = "40";
}
