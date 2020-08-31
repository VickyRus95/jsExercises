
function detectWord (charcode){
    let acumulador= "";
    for (let i = 0; i < charcode.length; i++){
    if (charcode[i] == charcode[i].toLowerCase()){
        //console.log (charcode[i]);
        acumulador += charcode [i]
       }
    }
    console.log (acumulador)
}  
detectWord("UcUNFYGaFYFYGtNUH") 
detectWord("bEEFGBuFBRrHgUHlNFYaYr") 
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") 






