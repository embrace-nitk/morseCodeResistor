let simsubscreennum=0;
let temp=0;

function navNext() {
    for (temp = 0; temp < 2; temp++) {
        const canvasElement = document.getElementById("canvas" + temp);
        if (canvasElement) {
            canvasElement.style.visibility = "hidden";
        }
    }
    simsubscreennum += 1;
    const nextCanvasElement = document.getElementById("canvas" + simsubscreennum);
    if (nextCanvasElement) {
        nextCanvasElement.style.visibility = "visible";
    }
    document.getElementById("nextButton").style.visibility = "hidden";
}




//=============//
let simsubscreennum1=0;
let temp1=0;
function navNext1 ()
{
for(temp1=0;temp1<2;temp1++)
{
    document.getElementById("canvas2"+temp1).style.visibility="hidden";
}
simsubscreennum1+=1;
document.getElementById("canvas2"+simsubscreennum1).style.visibility="visible";
document.getElementById("nextButton1").style.visibility="hidden";


}		  


function calculateResistance() {
    const firstBandColor = document.getElementById('firstBand').value;
    console.log("Selected First Band Color is: " +firstBandColor);
    const secondBandColor = document.getElementById('secondBand').value;
    console.log("Selected Second Band Color is: " +secondBandColor);
    const thirdBandColor = document.getElementById('thirdBand').value;
    console.log("Selected Third Band Color is: " +thirdBandColor);
    const fourthBandColor = document.getElementById('fourthBand').value;
    console.log("Selected Fourth Band Color is: " +fourthBandColor);

        // Check if any of the options is "Select Color"
        if (firstBandColor === 'selectColor' || secondBandColor === 'selectColor' ||
        thirdBandColor === 'selectColor' || fourthBandColor === 'selectColor') {
      document.getElementById('errorMessage').innerText = 'Please select the band colors';
      document.getElementById('errorMessage').style.color = 'red';
      document.getElementById('result').innerText = ''; // Clear any previous result
      return; // Stop further execution
    }

      // Clear error message if all bands are selected
      document.getElementById('errorMessage').innerText = '';

      // Check if any of the options is not selected
      if (!firstBandColor || !secondBandColor || !thirdBandColor || !fourthBandColor) {
        document.getElementById('result').innerText = 'Select the option for all the parameters to proceed.';
        document.getElementById('result').style.color = 'red'; // Set color to red
        return; // Stop further execution
      }

    // Combine the values of the first and second bands into a two-digit number
    const firstTwoDigits = getBandValue(firstBandColor) * 10 + getBandValue(secondBandColor);

    // Perform calculations based on color codes and display the result
    const resistance = `Resistance: ${firstTwoDigits} x 10^${getMultiplier(thirdBandColor)} ohms`;
    const tolerance = `Tolerance: ±${getTolerance(fourthBandColor)}%`;

    document.getElementById('result').innerText = `${resistance}\n${tolerance}`;
  }

  function getBandValue(color) {
    // Map color to corresponding band value
    const bandValueMap = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'gray': 8,
      'white': 9,
    };
    return bandValueMap[color];
  }

  function getMultiplier(color) {
    // Map color to corresponding multiplier value
    const multiplierMap = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'gray': 8,
      'white': 9,
      'gold': 0.1,
      'silver': 0.01,
      
    };
    return multiplierMap[color];
  }

  function getTolerance(color) {
    // Map color to corresponding tolerance value
    const toleranceMap = {
      // 'black': 1,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      // 'blue': 0.25,
      // 'violet': 0.1,
      // 'gray': 0.05,
      // 'white': 10,
      'gold': 5,
      'silver':10,
      'nocolor':20,
    };
    return toleranceMap[color];
  }