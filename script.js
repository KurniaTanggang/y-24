const pagesInput = ["page1", "page2", "page3"];
const pagesLabelFlip = ["apple", "orange", "cherry"];

const pages = document.getElementById("pages");
let html = "";
let bulanKiri = 0;
let bulanKanan = 0;

// if (document.getElementsByClassName('inp-galery').checked) {
//     console.log("checked");
// } else {
//     console.log("You didn't check it! Let me check it for you.");
// }

// var getAllCheckBox = document.querySelector('.inp-galery');
// // Adding event listener change to each checkbox
// getAllCheckBox.addEventListener('change', function (event, target) {
//     if (getAllCheckBox.checked) {
//         console.log(getAllCheckBox);
//     } else {
//         console.log("You didn't check it! Let me check it for you.");
//     }
// });

function isChecked(element) {
    if (element.checked) {
        document.getElementById('galery-id').classList.add("gallery-open");
        document.getElementById('galery-id').classList.remove("gallery-close");
        document.getElementById('galery-kanan-id').style.opacity = '0';
        if (bulanKiri == 1) {
            alert('Januari, awal bulan yang penuh harapan, ngapain aja sih waktu januari? Yok kita liat!')
        } else if (bulanKiri == 2) {
            alert('Maret, ini bulan ngapain ya, ohh iya banyak liburr karena ada nyepi hahaha, tapi tetap saja kerja kerja kerja kayak yang di foto-foto ini!')
        } else if (bulanKiri == 3) {
            alert('Mei, banyak "kejadian di sini ya" tapi tetap saja seteronggggggg!')
        } else if (bulanKiri == 4) {
            alert('Juli, awal bulan yang penuh harapan, ngapain aja sih waktu januari? Yok kita liat!')
        } else if (bulanKiri == 5) {
            alert('September, darurat foto 😭, liat aja ini fotonya 8 tapi aslinya 4 foto yang diulang, nanti lebih sering-sering foto ya 🫵!')
        } else if (bulanKiri == 6) {
            alert('November, ngapain lagi? jalan-jalan lah, dan yupp ada ke gereja, sering-sering gerejaaa yaaa!')
        }

    } else {
        bulanKiri = 0;
        document.getElementById('galery-id').classList.remove("gallery-open");
        document.getElementById('galery-id').classList.add("gallery-close");
        document.getElementById('galery-kanan-id').style.opacity = '1';
    }
}

function isCheckedKanan(element) {
    if (element.checked) {
        if (bulanKanan == 1) {
            alert('Februari, katanya sih bulan kasih sayang yaaa, tapi di bulan ini jadi salah satu awal perjalanan panjang alias go to Bali 🚀!')
        }else if (bulanKanan == 2) {
            alert('April, udah mulai banyak jalan-jalan di Bali, walau ya balek ke mall lagi!')
        } else if (bulanKanan == 3) {
            alert('Juni, ini fotonya di pantai semua, katanya sih beda-beda gayaaa, bener sih ya, yok bisa yok mantai lagi!')
        } else if (bulanKanan == 4) {
            alert('Agustus, kerja kerja kerja kerjaaaaa!')
        } else if (bulanKanan == 5) {
            alert('Oktober, udah di mana nichh, yeay akhirnya ketemuu Medan, lan jalannn!')
        } else if (bulanKanan == 6) {
            alert('Desember, lan jalannya dah mulai berkurang nih, dan yeayyyy dah mulai kerja lagiii, jajan dong kackk.!')
        }
        document.getElementById('galery-kanan-id').classList.add("gallery-kanan-open");
        document.getElementById('galery-kanan-id').classList.remove("gallery-close");
        document.getElementById('galery-id').style.opacity = '0';
    } else {
        bulanKanan = 0;
        document.getElementById('galery-kanan-id').classList.remove("gallery-kanan-open");
        document.getElementById('galery-kanan-id').classList.add("gallery-close");
        document.getElementById('galery-id').style.opacity = '1';
    }
}

function page1(element) {
    // var list;
    // list = document.querySelectorAll(".gallery");

    if (element.checked) {
        bulanKiri = 1;
        bulanKanan = 1;
        // console.log('c')
        // for (var i = 0; i < list.length; ++i) {
        //     list[i].classList.add('d-none');
        // }
        document.getElementById('label-page-1').style.height = '40%';
        document.getElementById('label-page-1').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-1').innerText = 'Januari';

        document.getElementById('galery-id').style.opacity = '1';
        document.getElementById('galery-kanan-id').style.opacity = '1';
        document.getElementById('galery-id').classList.remove("v-none");
        document.getElementById('galery-kanan-id').classList.remove("v-none");
        // document.getElementById('galery-id').style.visibility = 'visible';
        // document.getElementById('galery-id').style.opacity = '1';
        // document.getElementById('galery-kanan-id').style.visibility = 'visible';
        // document.getElementById('galery-kanan-id').style.opacity = '1';
        setPage1()
        // document.getElementById('galery-kanan-id').classList.remove("gallery-close");
    } else {
        // for (var i = 0; i < list.length; ++i) {
        //     list[i].classList.add('d-none');
        // }
        // document.getElementById('galery-id').style.visibility = 'hidden';
        // document.getElementById('galery-kanan-id').style.visibility = 'hidden';
        // console.log('d')
        document.getElementById('galery-id').style.opacity = '0';
        document.getElementById('galery-kanan-id').style.opacity = '0';
        document.getElementById('label-page-1').style.height = '100%';
        document.getElementById('label-page-1').innerHTML = '<div style="font-size:30px;margin-top: 15%;">Yessi 2024 <br><br>Sangat amat super rahasia 🔒</div>';
        document.getElementById('label-page-1').style.transform = 'scale(1, 1)';

        document.getElementById('galery-id').classList.add("v-none");
        document.getElementById('galery-kanan-id').classList.add("v-none");
    }
}

function page2(element) {
    if (element.checked) {

        bulanKiri = 2;
        bulanKanan = 2;
        document.getElementById('label-page-2').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-2').innerText = 'Maret';
        setPage3()
    } else {
        bulanKiri = 1;
        bulanKanan = 1;
        document.getElementById('label-page-2').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-2').innerText = 'Februari';
        setPage1()
    }
}

function page3(element) {
    if (element.checked) {
        bulanKiri = 3;
        bulanKanan = 3;
        document.getElementById('label-page-3').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-3').innerText = 'Mei';
        setPage5()
    } else {
        bulanKiri = 2;
        bulanKanan = 2;
        document.getElementById('label-page-3').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-3').innerText = 'April';
        setPage3()
    }
}

function page4(element) {
    if (element.checked) {
        bulanKiri = 4;
        bulanKanan = 4;
        document.getElementById('label-page-4').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-4').innerText = 'Juli';
        setPage7()
    } else {
        bulanKiri = 3;
        bulanKanan = 3;
        document.getElementById('label-page-4').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-4').innerText = 'Juni';
        setPage5()
    }
}

function page5(element) {
    if (element.checked) {
        bulanKiri = 5;
        bulanKanan = 5;
        document.getElementById('label-page-5').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-5').innerText = 'September';
        setPage9()
    } else {
        bulanKiri = 4;
        bulanKanan = 4;
        document.getElementById('label-page-5').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-5').innerText = 'Agustus';
        setPage7()
    }
}

function page6(element) {
    if (element.checked) {
        bulanKiri = 6;
        bulanKanan = 6;
        document.getElementById('label-page-6').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-6').innerText = 'November';
        setPage11()
    } else {
        bulanKiri = 5;
        bulanKanan = 5;
        document.getElementById('label-page-6').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-6').innerText = 'Oktober';
        setPage9()
    }
}

function page7(element) {
    if (element.checked) {
        bulanKiri = 6;
        bulanKanan = 6;
        document.getElementById('galery-id').style.opacity = '0';
        document.getElementById('galery-kanan-id').style.opacity = '0';
        document.getElementById('galery-id').classList.add("v-none");
        document.getElementById('galery-kanan-id').classList.add("v-none");
        document.getElementById('label-page-7').style.height = '100%';
        document.getElementById('label-page-7').style.transform = 'scale(-1, 1)';
        document.getElementById('label-page-7').innerHTML = '<div style="font-size:25px;margin-top: 15%;">Yeayy 🥳 <br><br>Mari sama-sama melewati umur yang baru ini dengan banyak bahagia 💕</div>';
    } else {
        document.getElementById('label-page-7').style.height = '40%';
        document.getElementById('label-page-7').style.transform = 'scale(1, 1)';
        document.getElementById('label-page-7').innerText = 'Desember';
        document.getElementById('galery-id').style.opacity = '1';
        document.getElementById('galery-kanan-id').style.opacity = '1';
        document.getElementById('galery-id').classList.remove("v-none");
        document.getElementById('galery-kanan-id').classList.remove("v-none");
        setPage11()
    }
}

function setPage1(){
    document.getElementById("img-kiri-1").src = 'img/januari/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/januari/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/januari/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/januari/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/januari/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/januari/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/januari/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/januari/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/feb/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/feb/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/feb/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/feb/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/feb/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/feb/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/feb/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/feb/8.jpg';
}

function setPage3(){
    document.getElementById("img-kiri-1").src = 'img/maret/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/maret/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/maret/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/maret/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/maret/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/maret/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/maret/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/maret/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/april/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/april/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/april/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/april/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/april/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/april/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/april/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/april/8.jpg';
}

function setPage5(){
    document.getElementById("img-kiri-1").src = 'img/mei/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/mei/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/mei/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/mei/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/mei/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/mei/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/mei/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/mei/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/juni/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/juni/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/juni/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/juni/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/juni/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/juni/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/juni/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/juni/8.jpg';
}

function setPage7(){
    document.getElementById("img-kiri-1").src = 'img/juli/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/juli/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/juli/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/juli/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/juli/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/juli/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/juli/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/juli/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/agustus/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/agustus/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/agustus/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/agustus/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/agustus/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/agustus/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/agustus/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/agustus/8.jpg';
}

function setPage9(){
    document.getElementById("img-kiri-1").src = 'img/september/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/september/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/september/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/september/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/september/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/september/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/september/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/september/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/oktober/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/oktober/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/oktober/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/oktober/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/oktober/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/oktober/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/oktober/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/oktober/8.jpg';
}

function setPage11(){
    document.getElementById("img-kiri-1").src = 'img/november/1.jpg';
    document.getElementById("img-kiri-2").src = 'img/november/2.jpg';
    document.getElementById("img-kiri-3").src = 'img/november/3.jpg';
    document.getElementById("img-kiri-4").src = 'img/november/4.jpg';
    document.getElementById("img-kiri-5").src = 'img/november/5.jpg';
    document.getElementById("img-kiri-6").src = 'img/november/6.jpg';
    document.getElementById("img-kiri-7").src = 'img/november/7.jpg';
    document.getElementById("img-kiri-8").src = 'img/november/8.jpg';

    document.getElementById("img-kanan-1").src = 'img/desember/1.jpg';
    document.getElementById("img-kanan-2").src = 'img/desember/2.jpg';
    document.getElementById("img-kanan-3").src = 'img/desember/3.jpg';
    document.getElementById("img-kanan-4").src = 'img/desember/4.jpg';
    document.getElementById("img-kanan-5").src = 'img/desember/5.jpg';
    document.getElementById("img-kanan-6").src = 'img/desember/6.jpg';
    document.getElementById("img-kanan-7").src = 'img/desember/7.jpg';
    document.getElementById("img-kanan-8").src = 'img/desember/8.jpg';
}

// for (let i = 1; i <= 5; i++) {
//     html += `<div class="page${i}">
//                 <label for="page${i}" class="flip"></label>
//             </div>`
// }


// pages.innerHTML = html;