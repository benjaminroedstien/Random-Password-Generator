
let CheckBoxUpperCase = document.getElementById("IncludeUppercaseLowercase")
let CheckBoxNumbers = document.getElementById("IncludeNumbers")
let CheckBoxSymbols = document.getElementById("IncludeSymbols")
let GeneratePasswordButton = document.getElementById("GeneratePasswordButton")
var Actual = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var UpperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SymbolsArray =  ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

CheckBoxUpperCase.addEventListener("change", (e) =>{
if (e.target.checked == true){
    Actual.splice(26, 0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    console.log(Actual)
} else {
    Actual.splice(26, 26)
    console.log(Actual)
}
})



CheckBoxNumbers.addEventListener("change", (e) =>{
    if (e.target.checked == true){
        Actual.splice(52, 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
        console.log(Actual)
        } else {
            for( var i = 0; i < Actual.length; i++){ 
                if ( Actual[i] === "0") { 
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "1"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "2"){
                    Actual.splice(i, 1)  
                }
                    if (Actual[i] === "3"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "4"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "5"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "6"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "7"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "8"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "9"){
                    Actual.splice(i, 1)
                }
            console.log(Actual)
        }
        }
})

   //=====================================================================\\
  // Generate Password Function triggered by eventlistener for HTML button \\
 // ========================================================================\\

CheckBoxSymbols.addEventListener("change", (e) =>{
    if (e.target.checked == true){
        Actual.splice(63, 0, "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/")
        console.log(Actual)
        } else {
            for( var i = 0; i < Actual.length; i++){ 
                if ( Actual[i] === "~") { 
                    Actual.splice(i, 1)
                }
                    if (Actual[i] == "`"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "!"){
                    Actual.splice(i, 1)  
                }
                    if (Actual[i] === "@"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "#"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "$"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "%"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "^"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "&"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "*"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "("){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === ")"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "_"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "-"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "+"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "="){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "{"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "["){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "}"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "]"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === ","){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "|"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === ":"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === ";"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "<"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === ">"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "."){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "?"){
                    Actual.splice(i, 1)
                }
                    if (Actual[i] === "/"){
                    Actual.splice(i, 1)
                }
                console.log(Actual)
            }
            
        }
})
    
   //===============================================\\
  // Eventlistener for HTML generate password button \\
 // ==================================================\\

GeneratePasswordButton.addEventListener('click', () =>{
    pwi.textContent = GeneratePassword()
    pwii.textContent = GeneratePassword()
    pwiii.textContent = GeneratePassword()
    pwiv.textContent = GeneratePassword()
    })

   //=====================================================================\\
  // Generate Password Function triggered by eventlistener for HTML button \\
 // ========================================================================\\

function GeneratePassword(){ 
     let ParsedString = ""
     let totalIterations = document.getElementById("NumberInput").value
     for (var i = 0; i < totalIterations; i++)
     ParsedString += Actual[Math.floor(Math.random() * Actual.length)];
     return ParsedString    
 }     
     
   //=========================================\\
  // Gopy password onto clicpboard functions   \\
 // ============================================\\

 function copyPw1() {
    navigator.clipboard.writeText(pwi.textContent).then(() => {
        alert("Copied to clipboard");
    });
}

function copyPw2() {
    navigator.clipboard.writeText(pwii.textContent).then(() => {
        alert("Copied to clipboard");
    });
}


function copyPw3() {
    navigator.clipboard.writeText(pwiii.textContent).then(() => {
        alert("Copied to clipboard");
    });
}

function copyPw4() {
    navigator.clipboard.writeText(pwiv.textContent).then(() => {
        alert("Copied to clipboard");
    });
}



   //========================================================================\\
  //  Museum of Dead Code i.e attempts it took to arrive at working version:  \\
 // ===========================================================================\\

 

    // Select.forEach(function(number) {
    //     if (number == 0) {
    //         return 0
    //     }
    //     else{
    //         return 1
    //     }
    // })
    
    //     else {
    //         if (Select[i] == 1){
    //             return 1
    //         }
    //     }
    // }

   


                   


    // function Selection(){
    //   for(i = 0; 1 < Select.length; i++){
    //     if (Select[i] == 0){
    //         return false
    //     }
    //     else{ return true
    //   }
       
        
    //  }   
   
    // }     

 



// var States={
//      State000 : [0, 0, 0],
//      State100 : [1, 0, 0],
//      State010 : [0, 1, 0],
//      State001 : [0, 0, 1],
//      State110 : [1, 1, 0],
//      State011 : [0, 1, 1],
//      State101 : [1, 0, 1],
//      State111 : [1, 1, 1]
// }

// var State000 = [0, 0, 0];
// var State100 = [1, 0, 0];
// var State010 = [0, 1, 0];
// var State001 = [0, 0, 1];
// var State110 = [1, 1, 0];
// var State011 = [0, 1, 1];
// var State101 = [1, 0, 1];
// var State111 = [1, 1, 1];

//     const StatesArray = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1 ]


//________________________________________________________________________________________________


// function getData() { // this function will get called when the generate pw button is clicked
    


    
        // if (Select.length !== State100.length ) return false;
        // for (var i = 0, len = Select.length; i < len; i++){
        // if (Select[i] == State100[i]){
        // return "100"
        // }
        // return false
    
        // }

        // console.log(State100)
     
  
     
    //     if (Select[1, 0, 0]){
    //     Actual = LowerCaseArray.concat(UpperCaseArray)
    // }
    
    // if (Select[0, '2']){
    //     Actual = LowerCaseArray.concat(NumbersArray)
    // }


//     var SelectedCheckBox = [];
//     for (var i=0; i<checkBoxEls.length; i++) {
//         if (checkBoxEls[i].checked) {
//             SelectedCheckBox.push(checkBoxEls.value);
//         }
//         console.log(SelectedCheckBox)
// }


// if (checkBoxEls).length == 0) {
//     console.log('Spipssten er ikke mine helt ennå');
// }
// if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
//     console.log('All checkboxes are checked');
//  else {
//     console.log('Some checkboxes are not checked');
// }
            
 

    // }; //add a click event to the save button



//________________________________________________________________________________________________

//________________________________________________________________________________________________

//     CheckBoxRow.addEventListener("change", (e) =>{

//     IncUpperCaseCheckbox.addEventListener("change", (e) => {
//         // call method that checks current state of all checkboxes
//         // Actual = LowerCaseArray.concat(UpperCaseArray.concat(NumbersArray.concat(SymbolsArray))) 
//         validateCheckboxes()
//     })
    
//     IncNumbersCheckbox.addEventListener("change", (e) => {
//         Actual = LowerCaseArray.concat(UpperCaseArray) 
        
//     })

//     IncSymbolsCheckbox.addEventListener("change", (e) => {
//         // validateCheckboxes()
       
//     })

//     if (IncUpperCaseCheckbox.checked == true && IncNumbersCheckbox.checked){
//         Actual = LowerCaseArray.concat(UpperCaseArray.concat(IncNumbersCheckbox)) 
//     }

// // function validateCheckboxes() {
// //     if (IncUpperCaseCheckbox.checked == true){
// //         Actual = LowerCaseArray.concat(UpperCaseArray) 
// //     }
// // }



    // if (IncUpperCaseCheckbox.checked){Actual = LowerCaseArray.concat(UpperCaseArray) 
    // }

    // if (IncNumbersCheckbox.checked){ Actual = LowerCaseArray.concat(NumbersArray)
    // }

    // if (IncSymbolsCheckbox.checked){ Actual =  LowerCaseArray.concat(SymbolsArray)        
    // }









    // else if  (IncNumbersCheckbox && IncSymbolsCheckbox === checked){
    // Actual = lowercaseArray.concat(NumbersArray, IncSymbolsCheckbox)}

    // else if (IncSymbolsCheckbox && IncUpperCaseCheckbox === checked){
    // Actual = LowerCaseArray.concat(IncUpperCaseCheckbox, IncSymbolsCheckbox)}

    // else (IncUpperCaseCheckbox && IncNumbersCheckbox && IncSymbolsCheckbox === checked)
    //     Actual = LowerCaseArray.concat(IncUpperCaseCheckbox, IncNumbersCheckbox, IncSymbolsCheckbox )
    
    
//     initialize Actual

//     if hceck box 1 checked then add relevant chars to Actual 
//     check box 2 ...
//     chexk box 3 ...

//     DRY = Don't Repeat Yourself

// }
//Denne funksjonen aktiveres når knappen "generate passwords" blir presset.


    // saus  = GeneratePassword(true, true)
    // function GeneratePassword(includeUppercase, includeLowercase) {
        // let actual = []; // how to create an empty arrray js
    //  if (includeUppercase) actual.concat(uppercase)      
  //  }



// funksjonene her er statert i html-dokumentet som "onclick" på paragrafene og span-elementene, de henter det nye passordet fra de fire linje ovenfor^ og kopierer de til utklipsbordet — samt gir en melding om at innholdet er blitt kopiert!
// function copyPw1() {

//     var copiedPw1 = pwi.textContent;

//     navigator.clipboard.writeText(copiedPw1).then(() => {
//         alert("Copied to clipboard");
//     });
// }








//________________________________________________________________________________________________





// CheckBoxQuery.addEventListener('change', (e) =>{
//     if (e.target.checked){
//         for (const checkbox of document.querySelectorAll('input:checked')) {
//             //iterating over all matched elements
//             // checkbox.checked = true //for selection
//             // checkbox.checked = false //for unselection
//             Select = Array.from(checkbox.value).map(x => x)
//          console.log(Select)
//          return Select
//             }
           
       
       
//     }
//     // else {
//     //     Actual = Array.from(baseline).map(x => x.value)
//     // }
 
// })



//________________________________________________________________________________________________




// let Query1 = document.getElementById("IncludeUppercaseLowercase")
// let Query2 = document.getElementById("IncludeNumbers")
// let Query3 = document.getElementById("IncludeSymbols")

// let checkBoxUpperCase = Query1.querySelectorAll('input[type="checkbox"]:checked')
// let checkBoxNumbers = Query2.querySelectorAll('input:checked').length === 0 ? false : true;
// let checkBoxSymbols = Query3.querySelectorAll('input:checked').length === 0 ? false : true;

//________________________________________________________________________________________________
// function Selection(){
//     if (Select.length !== StatesArray[0-2, 3-5, 6-8, 9-11, 12-14, 15-17, 18-20, 21-23] ) return false;
//     for (var i = 0, len = Select.length; i < len; i++){
//     if (Select[i] !== StatesArray[0-2, 3-5, 6-8, 9-11, 12-14, 15-17, 18-20, 21-23]){
//        return true; // true, det er true at de har ikke de samme verdiene
//     }
//     //dobble negativ, den er true, select er ikke lengre enn state000, er select lengre enn state000? false. 
//     //hvis select ikke har samme verdier i seg enn state000 så return true. Altså det er falskt at de ikke har de samme veridene
//     // de har de samme verdiene
//     return false;
//     }
// } 



// function Selection(){
//     if (Select.length !== States[i] ) return false;
//     for (var i = 0, len = Select.length; i < len; i++){
//     if (Select[i] !== States[i]){
//         return true; // true, det er true at de har ikke de samme verdiene
//     }
//     //dobble negativ, den er true, select er ikke lengre enn state000, er select lengre enn state000? false. 
//     //hvis select ikke har samme verdier i seg enn state000 så return true. Altså det er falskt at de ikke har de samme veridene
//     // de har de samme verdiene
//     return false;
//     }
// } 