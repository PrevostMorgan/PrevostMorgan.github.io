// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter();




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////
debugger;
// TODO 1 & 3: Create the applyFilter function here
function applyFilter(){
    for (var i = 0; i < image.length; i++){
        for (var j = 0; j < image[i].length; j++){
            var rgbString = image[i][j];
            //rgbString = rgbArrayToString(rgbNumbers);//
            var rgbNumbers = rgbStringToArray(rgbString);
            rgbNumbers[RED] = 225;
            rgbString = rgbArrayToString(rgbNumbers);
            //image[i][j] = rgbArrayToString(rgbNumbers);//
        }

    }
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions


// CHALLENGE code goes below here
