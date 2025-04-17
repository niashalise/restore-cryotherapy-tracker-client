const d = new Date();
export const [month, date, year] = [d.getMonth(), d.getDate(), d.getFullYear()];

const [hour, minutes, seconds] = [d.getHours(), d.getMinutes(), d.getSeconds()];

const dayOfWeek = d.getDay();

