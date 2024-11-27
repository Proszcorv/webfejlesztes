
/* SZÖVEG ÉS KÉP CSERÉJE KATTINTÁSRA */

    document.getElementById("dragon1").addEventListener("click", function() {
        replaceContent(1, this, document.getElementById("cloud"));
    });
    document.getElementById("dragon2").addEventListener("click", function() {
        replaceContent(2, this, document.getElementById("infernal"));
    });
    document.getElementById("dragon3").addEventListener("click", function() {
        replaceContent(3, this, document.getElementById("ocean"));
    });
    document.getElementById("dragon4").addEventListener("click", function() {
        replaceContent(4, this, document.getElementById("mountain"));
    });
    document.getElementById("dragon5").addEventListener("click", function() {
        replaceContent(5, this, document.getElementById("chemtech"));
    });
    document.getElementById("dragon6").addEventListener("click", function() {
        replaceContent(6, this, document.getElementById("hextech"));
    });

function replaceContent(index, clickedImage, drakes) {

    const paragraphs = [
        "Cloud Rift - Air currents flow throughout the area near the camps for Blue Sentinel and Red Brambleback, as well as the Dragon pit. These currents create speed zones that grant champions within 20% bonus movement speed, increased to 35% while they are out of combat. 6 additional Scryer's Blooms each spawn in front of both teams' base gates and by the tri-brushes near the river.",

        "Infernal Rift - Burns up the walls near the entrance of the Dragon pit. 10 additional Blast Cones each spawn in front of both teams' base gates, near the camps for Gromp and Murk Wolves, and within the alcoves. Spawns Infernal Cinders around the map randomly in a cluster of 2-3 once every 20 seconds. A cluster of Cinders lasts for 3 minutes before despawning, with a higher chance of spawning on the losing team's half of the map, based on team gold. Cinders can be picked up by champions moving over them, granting 150% bonus movement speed decaying over 2 seconds and a stack of Infernal Cinder. Each stack grants 1 ability haste.",

        "Ocean Rift - Sprouts life throughout the map, causing 6 patches of brush to grow larger and 12 puddles of water to form in the jungle. Two patches of brush grow near the Dragon pit. 4 additional Honeyfruit each spawn near the middle lane and the camps for Red Brambleback.",

        "Mountainous Rift - Triggers a seismic shift throughout the map, causing rock formations to emerge near the camps for Blue Sentinel and Red Brambleback as well as near the blue-side Raptor camp and entrance of the Dragon pit.",

        "Chemtech Rift - Mutates all life forms on the rift, enhancing jungle plants with additional effects. 8 additional Honeyfruit each spawn within both teams' bases, near the blue-side camp of Murk Wolves and the red-side camp of Blue Sentinel, and the entrances to the river near the camps for Raptors. 14 additional Scryer's Blooms each spawn in front of both teams' base gates, near the camps for Murk Wolves and Red Brambleback, near both teams' inner turrets within the top and bottom lanes, and near each tri-brush towards the entrances to the river.",

        "Hextech Rift - Industrializes the map with hextech technologies, summoning pairs of hex-gates within both teams' bases and near the pits for Baron Nashor and Dragon, functioning as portals for transit. Champions can interact with these gates to initiate Hexgate Warp, causing them to channel for 0.75 seconds. Upon completion, they dash to the other side of the gate over 2.25 seconds, during which they are untargetable and unable to act. They may also choose a location to dash another time up to 500 units away from the gate upon reaching their destination, though not through terrain. Pairs of hex-gates have a 30-second cooldown for each champion that activates them."
    ];

    const images = [
        "media/cloud_rift.png", 
        "media/infernal_rift.png",
        "media/ocean_rift.png",
        "media/mountainous_rift.png",
        "media/chemtech_rift.png",
        "media/hextech_rift.png"
    ];


    document.getElementById("default_paragraph").textContent = paragraphs[index - 1];

    document.getElementById("default_image").src = images[index - 1];

    document.querySelectorAll(".thumbnail").forEach(function(thumbnail) {
        thumbnail.classList.remove("highlight")});
    clickedImage.classList.add("highlight");

    document.querySelectorAll(".dragrow").forEach(function(dragrow) {
        dragrow.classList.remove("highlight2")});
    drakes.classList.add("highlight2");


}