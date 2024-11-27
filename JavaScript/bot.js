/* HÁTTÉR CSERE */
document.getElementById("bg1").addEventListener("mouseover", bg_1)
document.getElementById("bg2").addEventListener("mouseover", bg_2)
document.getElementById("bg3").addEventListener("mouseover", bg_3)

function bg_1() {
    document.getElementById("bg").style.backgroundImage = "url('media/piltover.jpg')"
}

function bg_2() {
    document.getElementById("bg").style.backgroundImage = "url('media/targon.jpg')"
}

function bg_3() {
    document.getElementById("bg").style.backgroundImage = "url('media/freljord.jpg')"
}

/* HIVATKOZÁS MEGERŐSÍTÉSE */

document.getElementById("link1").addEventListener("click", leave)
document.getElementById("link2").addEventListener("click", leave)

function leave(event) {
    if (confirm("You will return to the homepage to learn more about this role") == false) {
        event.preventDefault()
    }
}