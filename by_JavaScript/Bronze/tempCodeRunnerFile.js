const date = new Date.now();
let year = date.getFullYear();
let month = (date.getMonth() + 1).toString().padStart(2, 0);
let day = date.getDay().toString().padStart(2, 0);

console.log(year+'-'+month+'-'+day);