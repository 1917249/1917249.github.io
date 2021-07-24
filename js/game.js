document.getElementById( "uranai" ).onclick = function() {
    var rnd = Math.floor( Math.random() * 7 );
    var uranai;
    if (rnd === 0) uranai = "JIN";
    if (rnd === 1) uranai = "SUGA";
    if (rnd === 2) uranai = "J-HOPE";
    if (rnd === 3) uranai = "RM";
    if (rnd === 4) uranai = "JIMIN";
    if (rnd === 5) uranai = "V";
    if (rnd === 6) uranai = "JUNGKOOK";
    alert(uranai);
}