const daftarSlider = document.querySelector(".daftar-slider");
const itemSlider = document.querySelectorAll(".item-slider");
let jumlahItems;
let indeks;

function tampilkanItems() {
  let sumberKode = "";
  let tampilan = indeks + jumlahItems;
  for (let i = indeks; i < tampilan ; i++) {
    sumberKode += itemSlider[i].outerHTML;
  }
  daftarSlider.innerHTML = sumberKode;//outerHTML dari itemSlider
  console.log(`${indeks}`, `${jumlahItems}`, `${tampilan}`)
}; 

const mediaQueryList = [window.matchMedia("(max-width: 480px)"), window.matchMedia("(max-width: 768px)"),];
const HandleScreen = () => {
  if (mediaQueryList[0].matches) {
    jumlahItems = 1;
    indeks = 0;
    itemSlider.forEach( item => {
      item.style.width = "100%";
      item.style.minHeight = "400px";
    });
  }
  else if (mediaQueryList[1].matches) {
    jumlahItems = 2;
    indeks = 0;
    itemSlider.forEach( item => {
      item.style.width = "50%";
      item.style.minHeight = "400px";
    });
  }
  else {
    jumlahItems = 3;
    indeks = 0;
    itemSlider.forEach( item => {
      item.style.width = "35%";
      item.style.minHeight = "400px";
    });
  }
  tampilkanItems();
};

HandleScreen();

mediaQueryList.forEach( m => {
  m.addListener(HandleScreen);
});

const tombolMaju = document.querySelector(".tombol-maju");
const tombolMundur = document.querySelector(".tombol-mundur");
tombolMaju.addEventListener("click", () => {
  if (indeks < itemSlider.length - jumlahItems){
    indeks++;
    tampilkanItems();
  }
});
tombolMundur.addEventListener("click", () => {
  if (indeks <= itemSlider.length){
    indeks--;
    tampilkanItems();
  }
});