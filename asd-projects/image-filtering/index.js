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
    for (var i = image; i < image.length; i++){
        for (var j = image; j < image[i].length; j++){
            image[i][j] = rgbNumbers; 
            var rgbString = rgbNumbers;
            rgbStringToArray(rgbString);
            rgbNumbers[RED] = 225;
            rgbArrayToString(rgbNumbers);
            
        }

    }


}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions


// CHALLENGE code goes below here
