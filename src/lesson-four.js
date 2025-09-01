// 1.
function changeImage() {
    let img = document.getElementById("myImg");

    if (img.src.includes("cat.jpg")) {
        img.src = "public/dog.jpg";
    } else {
        img.src = "public/cat.jpg";
    }
}

// 2.
function hideImg() {
    document.getElementById("photo").style.display = "none";
}
function showImg() {
    document.getElementById("photo").style.display = "block";
}

// 3.
let img = document.getElementById("hoverImg");

img.addEventListener("mouseover", function () {
    img.src = "public/angry.png";
});

img.addEventListener("mouseout", function () {
    img.src = "public/smile.png";
});

// 4.
let zoom = document.getElementById("zoomImg");

zoom.addEventListener("click", function () {
    if (zoom.width === 200) {
        zoom.width = 400;
    } else {
        zoom.width = 200;
    }
});

function showLocation() {
    let urlInfo = document.querySelector(".urlInfo");
    urlInfo.innerHTML = `
       <p>URL ปัจจุบัน: ${location.href}</p>
       <p>โดเมน: ${location.hostname}</p>
       <p>Path: ${location.pathname}</p>
       <p>Protocol: ${location.protocol}</p>
   `;
}

function goGoogle() {
    location.assign("https://www.google.com");

    // กลับไม่ได้
    // location.replace("https://www.google.com");
}

function reloadPage() {
    location.reload();
}