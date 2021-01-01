const breakCamelCase = (strings) => {
    let stringOutput=strings[0];
    let i;
    if (strings.length>1) {
        for (let index = 1; index < strings.length; index++) {
            if (strings[index] === strings[index].toUpperCase()
            && strings[i] !== strings[index].toLowerCase()) {
                stringOutput+='<br/>';
            }
            stringOutput+=strings[index];  
        }    
    }
    return stringOutput
}
export default breakCamelCase;