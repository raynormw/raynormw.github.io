function LongestWord(sen) { 
    var arr = sen.replace(/[^a-zA-Z0-9 ]/g,"").split(" ");
    arr.sort(function(x,y) { return y.length - x.length; } );
    return arr[0];   
}