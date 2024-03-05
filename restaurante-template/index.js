//selectors
const sections = document.querySelectorAll('section')
const fatos = document.querySelector('#fatos-items')


const observer = new IntersectionObserver((entries) =>{
    if(entries[0].isIntersecting){
        console.log(entries[0].target)
        for (let i = 0; i <= entries[0].target.children.length; i++) {

            const element =  entries[0].target.children.item(i);
            element.classList.remove("none")
            element.classList.add("flex")
        }
    }
})

sections.forEach((section) => {
    observer.observe(section)
})

observer.observe(fatos)