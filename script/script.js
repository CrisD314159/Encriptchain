

    let counter = 0;




    let getTextToUnencript = (event) => {
        let textArea = document.querySelector("[data-encript-text-area]");
        let textContent = textArea.value; 

        event.preventDefault();
        if (textContent != "") {
            unEncriptText(textContent); 
        }else{
            window.alert('Ingresa primero algún texto');
        }
    }


    let unEncriptText = (textContent) => {
        let unEncriptedText ='';
        for (let i = 0; i < textContent.length; i++) {
           let letter = textContent[i];
            if (letter == 'a' || letter == 'e' ||letter == 'i' || letter == 'o' || letter == 'u') {
                let encriptedLetter = unEncriptLetter(textContent, i);
                if (encriptedLetter == 'a') {
                    unEncriptedText += encriptedLetter;
                    i = i+1;
                    
                }
                if (encriptedLetter == 'e') {
                    unEncriptedText += encriptedLetter;
                    i = i+4;
                    
                }
                
                if (encriptedLetter == 'i' || encriptedLetter == 'o' || encriptedLetter == 'u') {
                    unEncriptedText += encriptedLetter;
                    i = i+3;
                    
                    
                }    
            }else{
                unEncriptedText += letter;
            }
            
            
        } 
        setTextLabel(unEncriptedText);
    }
       



    let unEncriptLetter = (textContent, i) => {
        let letter = textContent[i];
        for (let j = i+1; j < textContent.length; j++){
            letter += textContent[j];
            if(letter.length == 2 && letter == "ai"){
                console.log("retorno a")
                return 'a';
            }
            if(letter.length == 5 && letter == "enter"){
                console.log('retorno e');
                return 'e';
            }   
            if (letter.length == 4 && letter == "imes") {
                return 'i';
            }
            if (letter.length == 4 && letter == "ober") {
                console.log("retorno o")
                return 'o';
            }
            if (letter.length == 4 && letter == "ufat") {
                return 'u';
            }
            

        }
    }


    

    let setTextLabel = (text) => {
        counter++;
        let p = document.querySelector("[data-p-text]");
        let image = document.querySelector("[data-image-container]");
        let input = document.querySelector("[data-input-label]");
        let button = document.querySelector("[data-copy-button]");

        if (counter == 1 || counter == 0) {
            p.remove;
            image.remove;
            button.classList.remove("not_activated");
            button.classList.add("activated");
            input.innerText = text;
        }else{
            input.innerText = text;
        }
        
    }



    /*Encript functions*/
    let getTextToEncript = (event) => {
        let textArea = document.querySelector("[data-encript-text-area]");
        let textContent = textArea.value;

        event.preventDefault();
        if (textContent != "") {
            encriptText(textContent); 
        }else{
            window.alert('Ingresa primero algún texto');
        }
        
    }

    let encriptText = (textContent) => {
        let encriptedText = '';
        for (let i = 0; i < textContent.length; i++) {
            let letter = textContent[i];
            if (letter != 'a' && letter != 'e' && letter != 'i' && letter != 'o'&& letter != 'u') {
                encriptedText+= letter;
            }else{
                let letterEncripted = encriptLetter(letter);
                encriptedText += letterEncripted; 
            } 
        }
        console.log(encriptedText);
        setTextLabel(encriptedText);
        
    }

    let  encriptLetter = (letter) => {
        switch (letter) {
            case 'a':
                return "ai";
    
             case 'e':
                return "enter";
       
             case 'i':
                return "imes";
           
             case 'o':
                return "ober";
         
             case 'u':
                return "ufat";
           
            default:
                return "not a vocal";
        }
        
    }

    /*Copy function*/
    let copyText = (event) => {
        let label = document.querySelector("[data-input-label]");
        let text = label.innerText;
        event.preventDefault();
        navigator.clipboard.writeText(text);
    }


    /*rest of the code*/


    let encriptButton = document.querySelector("[data-encript-button]");
    encriptButton.addEventListener("click", getTextToEncript);
    let unEncriptButton = document.querySelector("[data-de-encript-button]");
    unEncriptButton.addEventListener("click", getTextToUnencript)
    let copyButton = document.querySelector("[data-copy-button]");
    copyButton.addEventListener("click", copyText);



    

   

