const getQueryString = (queries) => {
    const newQueries = {};
    for (const key in queries) {
        if (queries[key] !== '' && queries[key] !== null && queries[key] !== undefined) {
        newQueries[key] = queries[key];
        }
    }

    const queryString = Object.keys(newQueries).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(newQueries[key])
    }).join('&');

    return queryString;
}

module.exports = {
    getQueryString
};
