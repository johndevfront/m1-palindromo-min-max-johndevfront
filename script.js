function isPalindrome(str){
  

    str = str.toLowerCase().replace(/\s/g, '');
    
    let stringInvertida = str.split('').reverse().join('');

    for( let i = 0; i < str.length; i++) {

        if( str[i] === stringInvertida[i].toLowerCase()) {
            
        }

        return str === stringInvertida;
    }


}
console.log(isPalindrome("O rei roeu a roupa do rato"))


function arrayMaxMin(arr) {
    let arrMax = arr[0];
    let len = arr.length;
    let arrMin = arr[len - 1];
    
    for (let i = 0; i <= len; i++) {
      
        if (arr[i] > arrMax) {
        arrMax = arr[i];
        } else if (arr[i] < arrMin) {
        arrMin = arr[i];
        }
    }
    let newArr = [arrMin, arrMax];
    return newArr;
  }