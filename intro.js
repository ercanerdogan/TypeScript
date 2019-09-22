function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer("Ercan Erdoğan");
console.log(mesaj);
var Renkler;
(function (Renkler) {
    Renkler[Renkler["K\u0131rm\u0131z\u0131"] = 1] = "K\u0131rm\u0131z\u0131";
    Renkler[Renkler["Siyah"] = 2] = "Siyah";
    Renkler[Renkler["Mavi"] = 3] = "Mavi";
})(Renkler || (Renkler = {}));
var renk = Renkler.Kırmızı;
console.log(renk);
