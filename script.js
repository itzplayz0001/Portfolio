// HTML
        document.querySelector('.second').innerHTML = `<span class="turqoise"><</span><span class="orang">h1</span> <span class="purple">class</span><span class="turqoise">="<span class="light-green">text</span><span class="turqoise">"></span></span>I'm ItzPLAYZ<span class="turqoise"><<span class="turqoise">/</span></span><span class="orang">h1<span class="turqoise">></span></span>`

        class TypeWriter {
            constructor(txtElement, words, wait = 3000) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = '';
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
            }
        
            type() {
            const current = this.wordIndex % this.words.length;
            const fullTxt = this.words[current];
        
            if(this.isDeleting) {

                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {

                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
        
            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
            let typeSpeed = 200;
        
            if(this.isDeleting) {
                typeSpeed /= 2;
            }
        

            if(!this.isDeleting && this.txt === fullTxt) {
                typeSpeed = this.wait;
                this.isDeleting = true;
            } else if(this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.wordIndex++;
                typeSpeed = 500;
            }
            setTimeout(() => this.type(), typeSpeed);
            }
        }
        
        document.addEventListener('DOMContentLoaded', init);
        
        function init() {
            const txtElement = document.querySelector('.txt-type');

            //new TypeWriter(txtElement, ["simple", "smart", "paperless"], 600);
        }
