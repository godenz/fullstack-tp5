var myArray = ["abc", "def", "ghi", "jkl"];
var resultado;

function alverre(arr) {
	if (Array.isArray(arr)) {
		resultado = true;
		var arrTmp = [];
		arrTmp = arr.slice();
		arr.length =0;
		for (var i=arrTmp.length; i>0; i--) {
			arr.push(arrTmp[i-1]);
		}
	}
	else {
		resultado = false;
	}
	return resultado;
}
console.log(myArray);
alverre(myArray);
console.log(resultado);
console.log(myArray);