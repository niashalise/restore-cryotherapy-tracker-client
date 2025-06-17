const d = new Date();
export const [month, date, year] = [d.getMonth(), d.getDate(), d.getFullYear()];
// console.log("Month, date, year: ", month, date, year);
const [hour, minutes, seconds] = [d.getHours(), d.getMinutes(), d.getSeconds()];

const dayOfWeek = d.getDay();

