// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
            console.log("hello");
            // resolve("akshay");// these lines will not be executed as promise is fulfilled only once
            // resolve(12345);
        }, 7000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");
            resolve(filename);
        }, 3000);
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

console.log("Start")
let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
.then(function processDownload(value) {
    console.log("donwloading done with following value", value);
    return value;
})
.then(function processWrite(value) {
    return writeFile(value);
})
.then(function processUpload(value) {
    return uploadData(value, "www.drive.google.com");
})
.then(function process(value) {
    console.log("done", value);
})

console.log("Ended");