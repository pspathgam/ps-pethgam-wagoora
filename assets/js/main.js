/* main.js - frontend interactions for the school site
   No external libraries required
*/

document.addEventListener('DOMContentLoaded', function(){

  // HERO SLIDER (simple crossfade)
  (function heroSlider(){
    const slides = document.querySelectorAll('.slide');
    if(!slides.length) return;
    let idx = 0;
    slides.forEach((s,i)=> s.style.opacity = (i===0?1:0));
    setInterval(()=>{
      slides[idx].style.transition = 'opacity 900ms ease';
      slides[idx].style.opacity = 0;
      idx = (idx+1) % slides.length;
      slides[idx].style.transition = 'opacity 900ms ease';
      slides[idx].style.opacity = 1;
    }, 6000);
  })();

  // Simple news carousel auto-scroll inside container (horizontal scroll)
  (function newsScroll(){
    const container = document.querySelector('.news-scroll');
    if(!container) return;
    let direction = 1;
    setInterval(()=>{
      if(container.scrollLeft + container.clientWidth >= container.scrollWidth) direction = -1;
      if(container.scrollLeft <= 0) direction = 1;
      container.scrollBy({left: direction*300, behavior:'smooth'});
    }, 3500);
  })();

  // Animated counters
  (function counters(){
    const els = document.querySelectorAll('.count-to');
    if(!els.length) return;
    els.forEach(el=>{
      const to = parseInt(el.getAttribute('data-to')||0,10);
      let cur = 0;
      const step = Math.max(1, Math.floor(to / 80));
      const id = setInterval(()=>{
        cur += step;
        if(cur >= to){
          cur = to;
          clearInterval(id);
        }
        el.textContent = cur.toLocaleString();
      }, 18);
    });
  })();

  // Simple contact form front-end validation
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value.trim();
      const email = contactForm.querySelector('[name=email]').value.trim();
      const message = contactForm.querySelector('[name=message]').value.trim();
      if(!name || !email || !message){
        alert('Please fill all required fields.');
        return;
      }
      // As no back-end, we just show a success message.
      contactForm.reset();
      alert('Thank you! Your message has been recorded locally. To actually send messages, integrate a back-end/email provider.');
    });
  }

  // Mobile nav toggle
  const mobileToggle = document.getElementById('mobileToggle');
  if(mobileToggle){
    mobileToggle.addEventListener('click', ()=>{
      document.querySelector('.nav').classList.toggle('open');
    });
  }

});
