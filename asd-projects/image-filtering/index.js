// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter(increaseGreenByBlue);




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////
debugger;
// TODO 1 & 3: Create the applyFilter function here
function applyFilter(filterFunction){
    for (var i = 0; i < image.length; i++){
        for (var j = 0; j < image[i].length; j++){
            var rgbString = image[i][j];
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers);
            image[i][j] = rgbArrayToString(rgbNumbers);
        }

    }
}

// TODO 5: Create the applyFilterNoBackground function

// TODO 2 & 4: Create filter functions
function reddify(rgbNumbers){
 rgbNumbers[RED] = 225;
}
function decreaseBlue(rgbNumbers){
rgbNumbers[BLUE] = Math.max(rgbNumbers[BLUE] - 30,0);
}
function increaseGreenByBlue(rgbNumbers){
rgbNumbers[GREEN] = Math.min(rgbNumbers[BLUE] + rgbNumbers[GREEN]);
}
// CHALLENGE code goes below here
