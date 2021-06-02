onst removeDuplicateValues = (array) => {
   let result = []

   for(let i = 0; i < array.length; i++){
       if(result.includes(array[i])){
           continue;
       }
       result.push(array[i])
   }

   return result
}


console.log(
  removeDuplicateValues(["one", "two", "one", "three", "three", "two"])
); // ['one','two','three']
