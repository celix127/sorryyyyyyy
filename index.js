const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('¿Cómo comienzo? Bueno, te quiero pedir perdon por la forma en como lleve todo esto, no era mi intención arruinar la amistad que estabamos llevando y se que me presipite demasiado, quiero dejar eso en el pasado porque se que hay muchos motivos para no estarlo, y lo acpeto, lo que me cuesta aceptar es que no hablemos, me había "acostumbrado" a diario tener una conversación contigo por mas minima que sea, y eso me agradaba, eso es lo que quiero recuperar, la amistad que habíamos formado en este tiempo:(( Si le picaste "Sí" es por dos motivos, de verdad me querias perdonar o solo le diste "si" porque te desesperase de no poder atinarle al "no" :p ')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
