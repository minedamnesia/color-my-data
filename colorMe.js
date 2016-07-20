colorMyData = {
	//returns a random subset of colors from your predefined color library (equal to the # of data points you have)
	smallPalette: function smallPalette(wholePalette, dataLength){
		if (dataLength > wholePalette.length){
			var dataPalette = wholePalette.random.slice(dataLength);
		}else {
			var dataPalette = wholePalette;
			alert("Your data set has more data points than you have colors for in your palette");
		};
		return dataPalette;
	},
	//creates a color dictionary for your dataLabels to pair a label with a color
	pairedPalette: function pairedPalette(dataLabels, smallPalette){
		var pairedPalette = {};
		if (dataLabels.length === smallPalette.length){
			for (i = 0, i < dataLabels.length, i++){
				pairedPalette[dataLabels[i]] = wholePalette[i];	
			}	
		} else if (dataLabels.length > smallPalette.length){
			alert('You have more data items than colors.  Add colors to your palette before pairing.')
		} else if (dataLabels.length < smallPalette.length){
			for (i = 0, i < dataLabels.length, i++){
				pairedPalette[dataLabels[i]] = wholePalette[i];	
			}		
			alert('You have more fewer items than colors in your palette. Some colors were not used.')
		}
		return pairedPalette;
	},
	//creates an array of colors in the order of your labels, using your color dictionary
	slicedPalette: function slicedPalette(pairedPalette, newDataLabels){
		var slicedPalette = [];
		if (Object.keys(pairedPalette).length < newDataLabels){
			alert('You have data that is not in the master data set.  Not all labels will have color pairs.')
		}
		for (i=0, i<newDataLabels.length, i++){
			if (pairedPalette[newDataLabels[i]]){
				slicedPalette.add(newDataLabels[i].value);
			}
		}
		if (Object.keys(pairedPalette).length < newDataLabels){
			alert('Some data labels were not found in the color dictionary.  Not all labels will have color pairs.')
		}
		return slicedPalette;
	}
}

module.exports = colorMyData;