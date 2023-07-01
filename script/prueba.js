



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
    return unEncriptedText;
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

let resultado = unEncriptText("hoberlai");
console.log(resultado);