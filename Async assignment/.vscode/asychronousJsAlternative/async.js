
// asyn and await
let urlInput = document.getElementById("url");
let downloadButton = document.getElementById("btn");

downloadButton.addEventListener("click", handleDownload);

async function handleDownload() {
  try {
    let res = await fetch(urlInput.value);
    let downloadFile = await res.blob();
    let link = document.createElement("a");
    link.href = URL.createObjectURL(downloadFile);
    link.download = new Date().getTime().toString();
    link.click();
  } catch (error) {
    console.error("unable to download, it could be:", error);
  }
}
