var Github = document.getElementById("Github");

Github.addEventListener("mouseover", function() {
    Github.style.textDecoration = "underline";
});

Github.addEventListener("mouseout", function() {
    Github.style.textDecoration = "none";
});

Github.addEventListener("click", function() {
    window.open("https://github.com/bribeyre/Fukush-e-Map_Geonum_2024", "_blank");
});

var Heatmap = document.getElementById("Heatmap");

Heatmap.addEventListener("mouseover", function() {
    Heatmap.style.textDecoration = "underline";
});

Heatmap.addEventListener("mouseout", function() {
    Heatmap.style.textDecoration = "none";
});

Heatmap.addEventListener("click", function() {
    window.open("https://jciv.iidj.net/map/list/", "_blank");
});
