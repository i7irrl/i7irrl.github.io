fetch("api/news.json")
.then(response => response.json())
.then(data => {
document.getElementById("news").innerText = data.message;
})
.catch(error => {
document.getElementById("news").innerText = "Failed to load JSON file";
});
