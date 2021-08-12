array = [2,5,3,8,12]

function reverse(arr){
    var i=0,j=arr.length-1;
    var temp;
    while(i<j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
   
    console.log(arr)
}

reverse(array)