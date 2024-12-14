// ? ANIMATION SECTION 5
const astronaut6a = document.querySelector("#astronaut-6a");
const astronaut6b = document.querySelector("#astronaut-6b");

let toggle = true; // flag to alternate animations

setInterval(() => {
    if (toggle) {
        astronaut6a.classList.add("animationShakeX");
        astronaut6b.classList.remove("animationShakeY");
    } else {
        astronaut6a.classList.remove("animationShakeX");
        astronaut6b.classList.add("animationShakeY");
    }
    toggle = !toggle; // switch the flag
}, 3000);


//? ICONS SECTION

function handleiconChange(element) {
    let extension

    if (element.name.includes("phone") || element.name.includes("mail")) 
        extension = "png"
    else 
        extension = "svg"

    setTimeout(() => {
        element.children[0].src = `src/img/assets/${element.name}-color.${extension}`;
    }, 120);
}

function handleIconRevert(element) {
    let extension

    if (element.name.includes("phone") || element.name.includes("mail")) 
        extension = "png"
    else 
        extension = "svg"

    setTimeout(() => {
        element.children[0].src = `src/img/assets/${element.name}-black.${extension}`;
    }, 120);
}

const iconsArr = document.querySelectorAll("#contact a");
console.log(iconsArr);

for (const element of iconsArr) {
    element.addEventListener("mouseover", () => handleiconChange(element))
    element.addEventListener("mouseout", () => handleIconRevert(element))
}

