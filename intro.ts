function selamVer(isim : string)
{
    return "Hi " + isim
}

let mesaj = selamVer("Ercan")

console.log(mesaj)

enum Renkler {Kırmızı=1, Siyah, Mavi}

let renk : Renkler = Renkler.Kırmızı

console.log(renk)


//deger variable could set any type of value
let deger : any 
deger=2
deger="hello"

deger={adi: "Ercan", mobileNumber : 123456 }


