/* HÁTTÉR CSERE */
document.getElementById("bg1").addEventListener("mouseover", bg_1)
document.getElementById("bg2").addEventListener("mouseover", bg_2)
document.getElementById("bg3").addEventListener("mouseover", bg_3)

function bg_1() {
    document.getElementById("bg").style.backgroundImage = "url('media/bilgewater.jpg')"
}

function bg_2() {
    document.getElementById("bg").style.backgroundImage = "url('media/shurima.jpg')"
}

function bg_3() {
    document.getElementById("bg").style.backgroundImage = "url('media/ixtal.jpg')"
}

/* HIVATKOZÁS MEGERŐSÍTÉSE */

document.getElementById("link").addEventListener("click", leave)

function leave(event) {
    if (confirm("You will return to the homepage to learn more about this role") == false) {
        event.preventDefault()
    }
}