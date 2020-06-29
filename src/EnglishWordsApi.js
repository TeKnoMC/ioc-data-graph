export function GetQuotesFromAPI () {
    return fetch("https://api.quotable.io/quotes?limit=10")
    .then((response) => {
        return response.json();
    }).then((quoteObjArr) => {
        return quoteObjArr.results.map((quoteObj) => quoteObj.content);
    });
}