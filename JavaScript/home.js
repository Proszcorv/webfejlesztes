
const ranks = [
    "Iron", "Bronze", "Silver", "Gold", "Platinum", "Emerald", "Diamond", "Master","Grandmaster", "Challenger"
]

document.getElementById("mybutton").addEventListener
("click", rankup);

function rankup() {

    let wins = 0;

    let a = Number(document.getElementById("rank").selectedIndex);
    current_rank = ranks[a]

    let current_lp = Number(document.getElementById("current_lp").value);
    let win_lp = Number(document.getElementById("win_lp").value);

    if (win_lp == 0 || isNaN(current_lp) || isNaN(win_lp)) {
        alert("Incorrect values!")
    } else {
        while (current_lp < 100) {
            current_lp = current_lp + win_lp;
            wins++;
        }
        document.getElementById("result1").innerText= `${wins}`;
        let division = Number(document.getElementById("division").value);
        let division_up = parseInt(100/win_lp);
        wins = wins + ((division-1)*division_up);
        a = a + 1
        document.getElementById("result2").innerText= `${wins} wins to ${ranks[a]}`;

        while (ranks[a] != ranks[9]) {
            a++;
            wins = wins + division_up*4;
        }
        document.getElementById("result3").innerText= `${wins} wins to ${ranks[9]}`;
    }

    

}
