function corventUserID(id){
	if(isNaN(id)) return false;

	const DiscordEpochMS = 1420070400000;
	let decimal = id;
	let binary = Number(decimal).toString(2);
	let timestampBinaryMS = binary.substr(0,binary.length-22);
	let timestampDecimalMS = parseInt(timestampBinaryMS,2);

	let timestampCorrect = (timestampDecimalMS+DiscordEpochMS);

	return new Date(timestampCorrect).toUTCString();
}
