
/*function arttir(){
  document.getElementById("sayac").innerText++;  
}

function azalt(){
    document.getElementById("sayac").innerText--;  
  }


//------------------------------


function olustur() {
    var gelenrenkler = [0];
    var renkler = ["white", "red", "green", "blue", "purple", "pink", "black", "gray", "orange"];
    var rastgele;
    for (var i = 0; i < 8; i++) {
        rastgele = Math.floor(Math.random() * 9);
        if (gelenrenkler.indexOf(rastgele) === -1) {
            gelenrenkler.push(rastgele);
            document.getElementById("box").innerHTML += "<div class='renk'><h3>" + i + "</h3></div>";
            document.getElementsByTagName("h3")[i].style.backgroundColor = renkler[rastgele];
        } else {
            i -= 1;
        }
    }
    i = 0;
}


function satranc(){
    var i,j;
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            if((j+i) %2==0){
                document.getElementById("tahtacerceve").innerHTML+="<div class='karebeyaz'></div>";
            }
            else{
                document.getElementById("tahtacerceve").innerHTML+="<div class='karesiyah'></div>"; 
            }
        }
    }
}



function table(){
    var sayac=1;
    var tr, td;
    var tableElement = document.getElementById("table");
    tableElement.innerHTML = '';  // Önceki içeriği temizle
    for (tr = 0; tr < document.getElementById("satır").value; tr++) {
        var row = tableElement.insertRow();
        for (td = 0; td < document.getElementById("sutun").value; td++) {
            var cell = row.insertCell();
            cell.innerHTML =sayac;
            sayac++;
        }
    }
}


var tablo=document.createElement("table");
tablo.border=1;

for(var i=0; i<10;i++){
    var satir=document.createElement("tr");
    for(var j=0; j<10;j++){
        var sutun=document.createElement("td");
        sutun.innerHTML="i değeri"+i+" j değeri "+j
        satir.appendChild(sutun);
    }
    table.appendChild(satir);
}
document.body.appendChild(tablo);

var metronom;
function baslat(){
    var notalar=["do","re","mi","fa","sol","la","si"];
    metronom=setInterval(()=>{
        rastgele=Math.floor(Math.random()*7);
        document.getElementById("potre").innerText+=notalar[rastgele]+"_";
    },2000);
}
function durdur(){
    clearInterval(metronom); 
}*/
function topla() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc1 = sayi1 + sayi2;
    document.getElementById("sonuc").innerHTML = sonuc1;
}

function Cikar() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc1 = sayi1 - sayi2;
    document.getElementById("sonuc").innerHTML = sonuc1;
}

function carp() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc1 = sayi1 * sayi2;
    document.getElementById("sonuc").innerHTML = sonuc1;
}

function bol() {
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var sonuc1 = sayi1 / sayi2;
    document.getElementById("sonuc").innerHTML = sonuc1;
}






