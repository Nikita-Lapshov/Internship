document.querySelectorAll('.js-accordion-item__trigger').forEach((item) =>
item.addEventListener('click', () => { 
    const parent = item.parentNode;

    if (parent.classList.contains('js-accordion-item--active')){
        parent.classList.remove('js-accordion-item--active');
    }else {
        document
            .querySelectorAll('.js-accordion-item')
            .forEach((child) => child.classList.remove('js-accordion-item--active') )
            parent.classList.add('js-accordion-item--active');
    }
    
})
)