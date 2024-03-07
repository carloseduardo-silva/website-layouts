class indexController {

    constructor(){

        this.sections = document.querySelectorAll('.notShow')
        this.fatos = document.querySelector('#fatos-items')
        this.fatosContainer = document.querySelector('#Fatos')
        this.counterYear = document.querySelector('#counterYear')
        this.counterClient = document.querySelector('#counterClient')
        this.counterMenu = document.querySelector('#counterMenu')
        this.menuHamburguer = document.querySelector('#menuHamburguer')
        this.navModal = document.querySelector('#navModal')
        this.closeModal = document.querySelector('#closeModal')

        this.init()
      
    }



    init(){
        this.observe()
        
        this.menuHamburguer.addEventListener("click", () =>{
            this.menuHamburguerToggle()
        })

         this.closeModal.addEventListener("click", () =>{
            this.menuHamburguerToggle()
        })
       

    }



    observe(){
        const observer = new IntersectionObserver((entries) =>{
            if(entries[0].isIntersecting){

                entries[0].target.classList.add('show')
                entries[0].target.classList.remove('notShow')
            }
            else{
                entries[0].target.classList.add('notShow')
                entries[0].target.classList.remove('show')
            }
        })
        
        this.sections.forEach((section) => {
            observer.observe(section)
        })

        
        const counterObserer = new IntersectionObserver((entries) =>{
            if(entries[0].isIntersecting){
                

                this.countingAnimation(1, 10, 1, 320, this.counterYear)
                this.countingAnimation(0, 1000, 10, 30, this.counterClient)
                this.countingAnimation(0, 50, 1, 50, this.counterMenu)
            }
        })

        counterObserer.observe(this.fatosContainer)
       
    }


    countingAnimation(initial, end, add, time, el){


        function increment(i, max){
            if(i > max) return;
            setTimeout(function(){
             el.innerText = '+ ' + i
            increment(i+add, max)
            }, time)

        }
        increment(initial, end)


    }

    menuHamburguerToggle(){
        if(this.navModal.classList.contains('hidden')){

            this.navModal.classList.remove('hidden')
            this.navModal.classList.add('flex')
        }
        else{
            this.navModal.classList.add('hidden')
            this.navModal.classList.remove('flex')
        }
       
    }
    
}




