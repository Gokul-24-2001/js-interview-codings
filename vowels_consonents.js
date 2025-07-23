let s = "apple is my favourite fruit"
let vowels = ["a", "e", "i", "o", "u"]
let v = "";
let consonents = ""
for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
        v += s[i]
    }

    else if (s[i] !== " ") {

        consonents += s[i]


    }
}
console.log(consonents,v);