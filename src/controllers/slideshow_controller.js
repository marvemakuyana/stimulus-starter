import { Controller }from 'stimulus';
export default class extends Controller{
    static targets = [ "slide" ]
    static values = { index: Number }

    // initialize() {
    //     this.showCurrentSlide()
    //     console.log(this.indexValue)
    //     console.log(typeof this.indexValue)

    //     // this.index = parseInt(this.element.getAttribute("data-index"))
    //     // this.showCurrentSlide()

    //     // this.index = 0
    //     // this.showCurrentSlide()
    // }
    next(){
        this.indexValue++
        //this.showCurrentSlide()

        // this.index++
        // this.showCurrentSlide()
    }
    previous(){
        this.indexValue--
        //this.showCurrentSlide()

        // this.index--
        // this.showCurrentSlide()
    }
    indexValueChanged() {
        this.showCurrentSlide()
    }
    showCurrentSlide(){
        this.slideTargets.forEach((element, index) => {
            element.hidden = index != this.indexValue
          })
        // this.slideTargets.forEach((element, index) => {
        //     element.hidden = index != this.index
        // })
    }
} 