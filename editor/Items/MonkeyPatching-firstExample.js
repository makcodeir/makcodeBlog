function sum(a , b){
	return a + b
}
const realSum = sum;

sum = function(...args){

	console.log("args : " , args);
	return realSum(...args);
};

console.log(sum(5 , 10));

