// Минифицированная версия с оптимизациями
(function(){
'use strict';

// ===== PRODUCT DATA =====
const products = {
  'mangal-mramor': {
    tag: 'Мангалы',
    title: 'Мангал с мраморной столешницей',
    desc: 'Мангал с тремя вставками из мрамора, решётчатыми полками для дров и посуды. Чаша из рифлёного металла. Покраска термостойкой эмалью.',
    specs: ['Мраморные вставки с трёх сторон', 'Решётчатые полки для дров', 'Чаша из рифлёного металла', 'Термостойкая покраска до 600°C', 'Изготовление под ваши размеры'],
    images: ['19SQFciqq1-kU_FMhZ9tPbyW7jFvJPoGBtoBoQzA40PhaurYk1lkvdCO-9lqwujENE1hll4blCs3qmTXI8adPgdt.jpg','CpcXvZzgW9Nu2IeOGF2puAmKEE5prOcW059_z2bgmcJJ6YEh8y2cQfhy_h_w1_ZTd_E_jP5ZHMkqGJ2bU5ubFU_Y.jpg']
  },
  'mangal-x': {
    tag: 'Мангалы',
    title: 'Мангал на X-образных ножках',
    desc: 'Стильный мангал с X-образной конструкцией ножек. Боковые полки из нержавеющей стали. Удобен в использовании.',
    specs: ['X-образные ножки — устойчивая конструкция', 'Боковые полки из нержавеющей стали', 'Термостойкая покраска', 'Нижняя полка для дров'],
    images: ['iQkp3SFW1a7WbPnpmqGaCfZ9NA59A0pXIABcrq8x7sc1InQ7fBLvJTBG0dTE4Albpg9uUnKBjF28skHGKA11on4b.jpg','9dUjwF_cI4BlR6TbTWmDL6aCVqnnjmDk0VhfGK1sG6NcXemj_HZO_GmC-pA3hTV0FRFqwIeyIS-F3hgKlBWyO7of.jpg','ijrIpOHnqgvr_fvN9n9tBThfrDlJgVo9BDo62tLEepCPOa5xAkAeYMQB4Bbm3CF1bHbwpTwgmGkgZadG1KwxMH-a.jpg']
  },
  'bbq': {
    tag: 'Кухни',
    title: 'Уличная барбекю-кухня',
    desc: 'Полноценная уличная кухня с мангалом, дымоходом, мраморной столешницей и декоративными дверцами с ромбовидным узором.',
    specs: ['Встроенный мангал с дымоходом', 'Мраморная столешница', 'Декоративные дверцы с ромбовидным узором', 'Нижние полки для хранения', 'Покраска термостойкой эмалью'],
    images: ['AbWHnTd9eUSB1MCZytT8i_vRMv-XBaMBSEjlLOFKeXnQZYdxoacRWaLpuqqF2gR0P2RQhHDt9JKSBf6GCnhch38L.jpg','EKaADIt1dCmBkRoeYpqcnNxZXBJI9TsYTtIiuxTW8FTrUCPKdkRqqnbx1X_aJPT8TP3MWUiST3089LTYtvv9LNLV.jpg']
  },
  'grill-ballona': {
    tag: 'Грили',
    title: 'Гриль-смокер из газового баллона',
    desc: 'Гриль-смокер ручной работы из газового баллона. Крышка откидывается, внутри решётка для гриля. Боковые столешницы из массива дерева с декоративными полками. Металлическая рама с X-образными ножками и нижней решётчатой полкой для дров.',
    specs: ['Корпус из газового баллона', 'Откидная крышка с деревянной ручкой', 'Решётка для гриля из нержавеющей стали', 'Боковые столешницы из массива дерева', 'X-образные ножки — устойчивая конструкция', 'Нижняя решётчатая полка для дров', 'Термостойкая покраска'],
    images: ['CpcXvZzgW9Nu2IeOGF2puAmKEE5prOcW059_z2bgmcJJ6YEh8y2cQfhy_h_w1_ZTd_E_jP5ZHMkqGJ2bU5ubFU_Y.jpg','yqLxb6Bc3ZXmY9ZTEoeI-u5S7JjkgW-uCsIE50gDWFcxsHMGwi70aAgHjkRZjNHWfRWe54nwzURRbkcrFge8I6gC.jpg','a359LbMsRxzOPtsDp9PmvpjWCLX6j4BUZ4oZIXEmLpWRE15vidzZkuWiecBcJAACJbNutKxAAyPtuq7ynSYAb3-0.jpg']
  },
  'ograda': {
    tag: 'Ограды',
    title: 'Металлическая ограда',
    desc: 'Сварная ограда с декоративным ромбовидным узором. Покраска в чёрный цвет. Изготовление под любые размеры участка.',
    specs: ['Декоративный ромбовидный узор', 'Покраска в чёрный матовый цвет', 'Любые размеры под ваш участок', 'Доставка и монтаж'],
    images: ['8l93MmqnclM53Z6habw7QfDiG-cpZEo5OQvXzncgs9CxNvfAmD968KX16KWQy1Lv1SQO9Yus4EH-XA6fnXEp-ptx.jpg','Jkm1ieLKsmcn-_P9MhBz1W8WO-1OoBHj15SeHAw6X5RXN0JXqrBrY6WfpQZ6759VL8s_D3jBIIgFIx91UAci8eIT.jpg']
  },
  'ograda-3x3': {
    tag: 'Ограды',
    title: 'Ограда 3×3м с калиткой',
    desc: 'Металлическая ограда 3×3 метра с декоративным ромбовидным узором и калиткой с крестом. Покраска в чёрный матовый цвет. Золотистые декоративные заклёпки. Подходит для установки на участке или кладбище.',
    specs: ['Размер 3×3 метра', 'Калитка с декоративным крестом', 'Ромбовидный узор по всему периметру', 'Золотистые декоративные заклёпки', 'Покраска в чёрный матовый цвет', 'Монтажные пластины для установки в грунт', 'Доставка и монтаж'],
    images: ['Ograda1.jpg','ograda 2.jpg','ograda 3.jpg']
  },
  'mangal-klassik': {
    tag: 'Мангалы',
    title: 'Мангал классический',
    desc: 'Надёжный мангал с полками из нержавеющей стали, нижней полкой для дров и усиленной рамой. Подходит для дачи и загородного дома.',
    specs: ['Полки из нержавеющей стали', 'Нижняя полка для дров', 'Усиленная рама', 'Термостойкая покраска'],
    images: ['9dUjwF_cI4BlR6TbTWmDL6aCVqnnjmDk0VhfGK1sG6NcXemj_HZO_GmC-pA3hTV0FRFqwIeyIS-F3hgKlBWyO7of.jpg','iQkp3SFW1a7WbPnpmqGaCfZ9NA59A0pXIABcrq8x7sc1InQ7fBLvJTBG0dTE4Albpg9uUnKBjF28skHGKA11on4b.jpg','s2g_tkA_DwCs1IBCKqHWaLLl2zFtwM7fa_3nBNweRSxh5-nhvyzH_fxty9KE0eypNxZy_q9eh-oMmHZ-CGKT7f5y.jpg']
  },
  'stellazh': {
    tag: 'Стеллажи',
    title: 'Стеллаж для хранения колёс',
    desc: 'Стеллаж для хранения двух комплектов колёс с полками. Покрашен матовой краской VIKI. Стеллаж можно регулировать по высоте ножками для устойчивости.',
    specs: ['Длина 2м30см, ширина 60см, высота 2м', 'Под колёса 16 радиуса, вмещает 8 колёс', 'Нагрузка на одну полку — 100 кг', 'Матовая краска VIKI', 'Регулируемые ножки для устойчивости', 'Изготовление под любые размеры'],
    images: ['Na2T6UrS9_F9q59QQaCkP6KL4ww-qu7XkslJGxm-PsJ11ujOZlX1SzXI379u8xWuZUOtrJKKs2LB9F0SQfHYJsh7.jpg','6t3ugu7wvBRo7q1QOXXD7KLh6qLhCcUMpDHcqwCODGdKl_jEBVt7DlB2bB8Sx0REW7V3c-wURSROwC-yMZ1DicT2.jpg']
  }
};

// Кэшируем DOM элементы
const d=document,
      burger=d.getElementById('burger'),
      mobileNav=d.getElementById('mobileNav'),
      header=d.querySelector('.header'),
      orderModal=d.getElementById('orderModal'),
      lightbox=d.getElementById('lightbox'),
      lightboxImg=d.getElementById('lightboxImg'),
      strip=d.querySelector('.gallery__strip');

// Burger menu
burger.addEventListener('click',()=>mobileNav.classList.toggle('open'));
window.closeMenu=()=>mobileNav.classList.remove('open');

// Header scroll — throttled для производительности
let ticking=false;
window.addEventListener('scroll',()=>{
  if(!ticking){
    window.requestAnimationFrame(()=>{
      header.style.background=window.scrollY>50?'rgba(13,13,13,0.98)':'rgba(13,13,13,0.92)';
      ticking=false;
    });
    ticking=true;
  }
},{passive:true});

// Order modal
window.openOrderModal=()=>{
  orderModal.classList.add('open');
  d.body.style.overflow='hidden';
};
window.closeOrderModal=(e)=>{
  if(!e||e.target===orderModal){
    orderModal.classList.remove('open');
    d.body.style.overflow='';
  }
};

// Lightbox
d.querySelectorAll('.gallery__strip img').forEach(img=>{
  img.addEventListener('click',(e)=>{
    e.stopPropagation();
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add('open');
    d.body.style.overflow='hidden';
  });
});
window.closeLightbox=()=>{
  lightbox.classList.remove('open');
  d.body.style.overflow='';
};

// Keyboard shortcuts
d.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){
    window.closeOrderModal();
    window.closeLightbox();
    window.closeProductModal();
  }
});

// Gallery drag scroll — оптимизированный
let isDown=false,startX,scrollLeft;
strip.addEventListener('mousedown',(e)=>{
  isDown=true;
  strip.style.cursor='grabbing';
  startX=e.pageX-strip.offsetLeft;
  scrollLeft=strip.scrollLeft;
});
strip.addEventListener('mouseleave',()=>{isDown=false;strip.style.cursor='grab';});
strip.addEventListener('mouseup',()=>{isDown=false;strip.style.cursor='grab';});
strip.addEventListener('mousemove',(e)=>{
  if(!isDown)return;
  e.preventDefault();
  const x=e.pageX-strip.offsetLeft;
  strip.scrollLeft=scrollLeft-(x-startX)*2;
});

// Form submit
window.handleSubmit=(e)=>{
  e.preventDefault();
  const btn=e.target.querySelector('button[type="submit"]');
  btn.textContent='✓ Заявка отправлена!';
  btn.style.background='#2a7a2a';
  btn.disabled=true;
  setTimeout(()=>{
    btn.textContent='Отправить заявку';
    btn.style.background='';
    btn.disabled=false;
    e.target.reset();
  },3000);
};

// Intersection Observer для анимаций — более производительный
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity='1';
        entry.target.style.transform='translateY(0)';
        observer.unobserve(entry.target); // Отключаем после анимации
      }
    });
  },{threshold:0.1,rootMargin:'50px'});

  d.querySelectorAll('.card,.adv__item,.stat').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(24px)';
    el.style.transition='opacity 0.5s ease,transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== PRODUCT MODAL =====
const productModal = d.getElementById('productModal');
let currentImages = [];
let currentImgIndex = 0;

window.openProductModal = (id) => {
  const p = products[id];
  if (!p) return;
  currentImages = p.images;
  currentImgIndex = 0;
  d.getElementById('productTag').textContent = p.tag;
  d.getElementById('productTitle').textContent = p.title;
  d.getElementById('productDesc').textContent = p.desc;
  d.getElementById('productSpecs').innerHTML = p.specs.map(s=>`<li>${s}</li>`).join('');
  d.getElementById('productThumbs').innerHTML = p.images.map((src,i)=>
    `<div class="product-modal__thumb ${i===0?'active':''}" onclick="setProductImg(${i})"><img src="${src}" alt="Фото ${i+1}" loading="lazy"/></div>`
  ).join('');
  updateProductMainImg();
  productModal.classList.add('open');
  d.body.style.overflow = 'hidden';
};

window.closeProductModal = (e) => {
  if (!e || e.target === productModal) {
    productModal.classList.remove('open');
    d.body.style.overflow = '';
  }
};

window.setProductImg = (index) => {
  currentImgIndex = index;
  updateProductMainImg();
};

window.changeProductImg = (dir) => {
  currentImgIndex = (currentImgIndex + dir + currentImages.length) % currentImages.length;
  updateProductMainImg();
};

function updateProductMainImg() {
  const img = d.getElementById('productMainImg');
  img.style.opacity = '0';
  setTimeout(() => { img.src = currentImages[currentImgIndex]; img.style.opacity = '1'; }, 150);
  d.getElementById('productCounter').textContent = `${currentImgIndex+1} / ${currentImages.length}`;
  d.querySelectorAll('.product-modal__thumb').forEach((t,i) => t.classList.toggle('active', i===currentImgIndex));
}

})();
