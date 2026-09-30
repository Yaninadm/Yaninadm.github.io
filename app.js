const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.card')];
const count=document.querySelector('#result-count');
filters.forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;
 filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 let visible=0;
 cards.forEach(card=>{card.hidden=selected!=='all'&&card.dataset.category!==selected;if(!card.hidden)visible++;});
 count.textContent=`${visible} ${visible===1?'proyecto':'proyectos'}`;
}));
