array = [3,7,2,5,9,13];

// using brute-force method
function small_big(arr){
    var largest,smallest,temp;
    for(var i = 0; i < arr.length; i++){
        for(var j = i; j < arr.length; j++){
            if(arr[i]>arr[j]){
                // swap the elements using third variable
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // this is the sorted array
    console.log(arr)
    largest = arr[arr.length-1];
    smallest = arr[0];
    console.log("Largest Element is", largest)
    console.log("Smallest Element is", smallest)

}
small_big(array)
//Here the time complexity here is O(n^2)