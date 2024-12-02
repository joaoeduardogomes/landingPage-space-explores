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