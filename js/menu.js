/**
 * Created by flo on 7/6/16.
 */

var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '185px'
        }, 200);
    });

    $('.icon-close').click(function() {
        $('.menu').animate({
            left: '-185px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 200);
    });

    $('.about').click(function(){
        $('.center-text').text("Avaloncraft besteht bereits seit 2013. Das Projekt startete als kleiner Server für ein paar Freunde" +
            "vor einigen Monaten haben wir dann beschlossen einen Root-Server zu mieten und unseren Server für alle anderen Spieler" +
            "zu öffnen. Im moment ist der Server noch ein ziemlicher Rohbau während wir immer weiter an allen Kleinigkeiten wie Plugins" +
            "Multiverse etc. feilen. Aber Ihr seid alle herzlich eingeladen unseren Server zu besuchen und uns dabei Gesellschaft zu leisten")
    });
    $('.contact').click(function() {
        $('.center-text').text("Ihr könnt uns direkt auf dem Server oder auf TS erreichen.Alternativ avaloncraft@gmail.com");
    });

};


$(document).ready(main);