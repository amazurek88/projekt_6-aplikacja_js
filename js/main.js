function kubekSet(kubek) {
    kubek.style.backgroundPosition = "0 " + kubek.poziom + "%";
    kubek.setAttribute('poziom', kubek.poziom);
}
let kubki = document.querySelectorAll('.kubek');

kubki.forEach( kubek => {
    kubek.poziom = Number(kubek.getAttribute('poziom'));
    kubek.kierunek = 0;
    kubek.addEventListener('click', function() {
        console.log("dolewam => poziom => " + kubek.poziom + " kierunek => " + kubek.kierunek);
        if(kubek.poziom <= 96 && kubek.kierunek == 0) {
            kubek.poziom += 24;
            kubekSet(kubek);
            if(kubek.poziom >= 96 && kubek.kierunek == 0) {
                kubek.kierunek = 1;
            }
        } else {
            kubek.poziom -= 24;
            kubekSet(kubek);
            if(kubek.poziom < 24 && kubek.kierunek == 1) {
                kubek.kierunek = 0;
            }
        }
    })
})