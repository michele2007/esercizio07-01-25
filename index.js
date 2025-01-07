let elements = document.querySelectorAll(".element");

for (let i = 0; i < elements.length; i++) {

    let el = element[1]
    el.classList.add("greenBg");
    el.addEventListener/("click", function(e) {
        el.ClassList.remove("greenBg");
        el.ClassList.remove("yellowBg")
    })
}