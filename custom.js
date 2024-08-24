function vowelCount(str) {
    let vowelList = 'AEIOUaeiou';
    let vcount = 0;
    for(let x = 0; x < str.length; x++) {
        if (vowelList.indexOf(str[x]) !== -1)
        {
            vcount += 1;
        }
    }
return vcount;
}

console.log(vowelCount("Shut the door behind you when you leave"));