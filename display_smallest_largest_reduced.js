array = [3,7,2,5,9,13];

function small_big(arr){
    var largest=arr[0], smallest=arr[0];
    for(var i = 0; i<arr.length; i++){
        if(largest<arr[i]){
            largest = arr[i]
        }
    }
    for(var i = 0; i<arr.length; i++){
        if(smallest>arr[i]){
            smallest = arr[i]
        } 
    } 
    console.log("The largest element in array is", largest);
    console.log("The smallest element in array is", smallest);

}

small_big(array)