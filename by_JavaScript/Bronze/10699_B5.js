const date = new Date();

//YYYY-MM-dd 형식 출력
let year = date.getUTCFullYear();
let month = (date.getUTCMonth() + 1).toString().padStart(2, 0);
let day = date.getUTCDate().toString().padStart(2, 0);

console.log(year+'-'+month+'-'+day);