function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Check if the drop is inside the recombination site
    var recombinationSite1 = document.getElementById("recombinationSite1");
    var recombinationSite2 = document.getElementById("recombinationSite2");
    var rect1 = recombinationSite1.getBoundingClientRect();
    var rect2 = recombinationSite2.getBoundingClientRect();
    var x = event.clientX;
    var y = event.clientY;

    if (x >= rect1.left && x <= rect1.right && y >= rect1.top && y <= rect1.bottom) {
        // Append the gene to the recombination site 1
        recombinationSite1.innerHTML = draggedElement.innerHTML;
    } else if (x >= rect2.left && x <= rect2.right && y >= rect2.top && y <= rect2.bottom) {
        // Append the gene to the recombination site 2
        recombinationSite2.innerHTML = draggedElement.innerHTML;
    } else {
        // Return the gene to its original position
        var geneContainer = document.getElementById("geneContainer");
        geneContainer.appendChild(draggedElement);
    }
}
