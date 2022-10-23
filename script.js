const input = document.querySelector('.container > .menu > input');
const menu = document.querySelector('.container  > .menu');
const navBar = document.querySelector('.container > .list-nav');
const body = document.querySelector('body');
const link = document.querySelectorAll('.container > .list-nav > li > a');
const span = document.querySelectorAll('.container > .menu > span');
const nav = document.querySelector('.container');
const imageKarya = document.querySelectorAll('.main > .contain > figure > .bungkus > img');
const description = document.getElementById('desc');
const close = document.getElementById('close');
const gambar = document.querySelector('.main > .desc > .bungkus > img');

window.addEventListener('scroll', function() {
     nav.classList.toggle('sticky', window.scrollY > 0);
});

input.addEventListener('click', function () {
     navBar.classList.toggle('slide');
     body.classList.toggle('hidden');
     if (window.scrollY > 0) {
          menu.classList.toggle('push-menu');
     }
     nav.classList.toggle('opacity');
     span.forEach(function () {
          span[0].classList.toggle('satu');
          span[1].classList.toggle('dua');
          span[2].classList.toggle('tiga');
     });
});

link.forEach(function (e) {
     e.addEventListener('click', function () {
          navBar.classList.remove('slide');
          body.classList.remove('hidden');
          menu.classList.remove('push-menu');
          nav.classList.remove('opacity');
          span.forEach(function () {
               span[0].classList.remove('satu');
               span[1].classList.remove('dua');
               span[2].classList.remove('tiga');
          });
     });
});

imageKarya.forEach(function (e) {
     e.addEventListener('click', function () {
          description.classList.add('top');
          nav.style.display = 'none';
          body.classList.add('hidden');
          ubahFormat(e);
     });
});

close.addEventListener('click', function () {
     description.classList.remove('top');
     nav.style.display = 'flex';
     body.classList.remove('hidden');
});
// judul figure untuk device hp
const h2Atas = document.querySelector('.main > .desc > .bungkus > .text-atas > .judul-atas > h2');

//judul figure untuk device pc
const h2Bawah = document.querySelector(' .main > .desc > .bungkus > .teks > .judul > h2');

const deskripsi = document.querySelector('.main > .desc > .bungkus > .teks > p');

function ubahFormat (event) {
     const datas = ['src', 'title', 'deskripsi']
     gambar.src = event.src;
     gambar.title = event.title;
     h2Atas.innerHTML = event.title;
     h2Bawah.innerHTML = event.title;
     deskripsi.innerHTML = event.className;
}