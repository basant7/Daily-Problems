array = [2,4,5,8,3,2,5]

function duplicates(arr){
    var temp =[], i,j;
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                temp += arr[i]
            }
        }
    }
    console.log("The duplicates are",temp.split(''))
}

duplicates(array)