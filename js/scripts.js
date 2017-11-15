var string = "Привет как дела?";                                    
var stringArray = string.split("");                                           
var vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];   
var result = "";                                                    


  for (i = 0; i < stringArray.length; i++) {                              
    currentLetter=stringArray[i];
    if (vowels.indexOf(currentLetter) !== -1) {
    result = result + currentLetter;
      }
    
}
console.log("Решение задачи 1: " + result);


