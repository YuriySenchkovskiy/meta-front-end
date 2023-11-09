function isOpposite(s1,s2){
    if (s1.length === 0 || s1.length !== s2.length) return false;

    for (var i = 0; i < s1.length; i++) {
        if(s1[i] === s2[i]) return false;
    }

    return true;
}

console.log(isOpposite("aBcde","AbCD"))