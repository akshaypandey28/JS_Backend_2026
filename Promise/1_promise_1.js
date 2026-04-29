function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from", url);

        setTimeout(function process() {
            let data = "Dummy data from " + url;

            console.log("Completed fetching the data");

            // return data via resolve
            resolve(data);

            // if something went wrong, you would use:
            // reject("Error while fetching data");
        }, 4000);
    });
}


// -------- USING .then() --------
fetchData("https://example.com")
    .then(function (result) {
        console.log("Received:", result);
    })
    .catch(function (err) {
        console.error("Error:", err);
    });


// -------- USING async/await --------
async function main() {
    try {
        let result = await fetchData("https://example.com");
        console.log("Received with async/await:", result);
    } catch (err) {
        console.error("Error:", err);
    }
}

main();