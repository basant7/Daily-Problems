array = [2,5,3,7,4,9]

function selection(arr){
    for(var i = 1; i < arr.length; i++){
        var temp = arr[i];
        var j = i-1;
        while(i>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
        // console.log(arr);
    }
    console.log(arr);
}

selection(array)