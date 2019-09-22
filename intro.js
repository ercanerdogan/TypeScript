function selamVer(isim) {
    return "Hi " + isim;
}
var mesaj = selamVer("Ercan");
console.log(mesaj);
var Renkler;
(function (Renkler) {
    Renkler[Renkler["K\u0131rm\u0131z\u0131"] = 1] = "K\u0131rm\u0131z\u0131";
    Renkler[Renkler["Siyah"] = 2] = "Siyah";
    Renkler[Renkler["Mavi"] = 3] = "Mavi";
})(Renkler || (Renkler = {}));
var renk = Renkler.Kırmızı;
console.log(renk);
//deger variable could set any type of value
var deger;
deger = 2;
deger = "hello";
deger = { adi: "Ercan", mobileNumber: 123456 };
