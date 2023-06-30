let defaultCity = "上海"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {
    console.log(Error);
}
export default {
    city : defaultCity
}