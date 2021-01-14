#!/usr/bin/env node

const axios = require('axios');
const path = require('path');
const fs = require('fs');
const os = require('os');

const URL = "http://api.worldweatheronline.com/premium/v1/weather.ashx"
const KEY = "d353414b59d7400db8f13557211401"
const url = `${URL}?key=${KEY}`

const fetchTemp = async (city) => {
	try {
		const response = await axios.get(`${url}&q=${city}&format=json`);
		// console.log(response.data.data.current_condition[0]);
		return response.data.data.current_condition[0];
	} catch (error) {
		console.error("Cannot find temperature , please input valid cityname",error);
	}
}

const isFileExist = file => {
	try {
		stats = fs.statSync(file);
		return true;
	} catch (e) {
		return false;
	}
}

const writeCSV = (data) => {
	const filename = path.join(__dirname, 'output.csv');
	if (! isFileExist(filename) ) {
		const heading = ['City Name', 'Temperature', 'Unit', 'Precipitation (mm)'];
		fs.appendFileSync(filename, `${heading.join()}${os.EOL}`);
	} 
	fs.appendFileSync(filename, `${data.join()}${os.EOL}`);
}

(async () => {
	if ( process.argv[2] === 'temperature' ) {
		const city = process.argv[3] ? process.argv[3] : 'Dallas';
		const rsp = await fetchTemp(city);
		const data = [city,rsp.temp_C,'C',rsp.precipMM];
		writeCSV(data);
		console.info(data.join());
	}
})();