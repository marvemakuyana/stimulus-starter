import { Controller } from 'stimulus';

export default class extends Controller{
    static targets = [ 'test', 'error'];

    greet(event) {
        const element = this.testTarget;
        const name = element.value;
        const element2 = this.errorTarget;
        const name2 = element2.value;
        //console.log('Hello, Stimulus!', this.element)
        //console.log(`Hello, ${name}!`)

        // if (!name) {
        //     return element2.innerHTML = 'error empty field'; // Do not submit form
        //   }
        //   else{
        //      element2.innerHTML = ''; 
        // console.log(`Hello, ${this.test}`)

        //   }
        if (!element.checkValidity()) { 
            return element2.innerHTML = 'error empty field';
        }
          else{
          element2.innerHTML = ''; 
         console.log(`Hello, ${this.test}`)

          }
        
    }
    get test() {
        return this.testTarget.value
    }
}