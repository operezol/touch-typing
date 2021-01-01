const breakCamelCase = (strings) => {
    let stringOutput;
    let i;
    if (strings.length>2) {
        stringOutput='<span style="font-size:.7vw;line-height:.7vw">'
        stringOutput+=strings[0];
        for (let index = 1; index < strings.length; index++) {
            if (strings[index] === strings[index].toUpperCase()
            && strings[i] !== strings[index].toLowerCase()) {
                stringOutput+='<br/>';
            }
            stringOutput+=strings[index];  
        }    
        stringOutput+='</span>'
    }else{
        stringOutput=strings;
    }
    return stringOutput
}
export default breakCamelCase;