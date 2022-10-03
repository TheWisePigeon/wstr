## This is (supposed to be) a JavaScript port of Python's most useful string methods(At least those who are not in JavaScript)

I wrote it in TypeScript and then transpiled it into JavaScript.
It exports 4 functions, but expect this number to grow very soon

- capitalize
- title
- center
- zfill


### capitalize
From the Python's functionm it takes in a string and returns the same sring with the first character capitalized.
```js
const pstr = require("pstr")
let name = "freeman"

console.log(pstr.capitalize(name)) //-> "Freeman"
```

### title
Also does the same thing as the Python's `title`.
```js
const pstr = require("pstr")
let bookTitle = "the flying house"

console.log(pstr.title(bookTitle)) //-> "The Flying House"
```

### center
The center() method will center align the string, using a specified character (space is default) as the fill character.
```js
const pstr = require("pstr")
let menu = "Menu"

console.log(pstr.center(menu)) //-> "   menu   "
console.log(pstr.center(menu, "*")) //-> "***menu***"
console.log(pstr.center(menu, "*", 5)) //-> "*****menu*****"
```

### zfill
The zfill() method adds zeros (0) at the beginning of the string, until it reaches the specified length.
```js
const pstr = require("pstr")
let id = "12"

console.log(pstr.zfill(name, 5)) //-> "00012"
```