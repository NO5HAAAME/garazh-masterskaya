// Минифицированная версия с оптимизациями
(function(){
'use strict';

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

})();
