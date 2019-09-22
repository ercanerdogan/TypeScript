function selamVer(isim : string)
{
    return "Merhaba " + isim
}

let mesaj = selamVer("Ercan Erdoğan")

console.log(mesaj)

enum Renkler {Kırmızı=1, Siyah, Mavi}

let renk : Renkler = Renkler.Kırmızı

console.log(renk)
