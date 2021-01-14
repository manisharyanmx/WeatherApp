# weatherApp
App to grab the weather(temperature, celsius units, precepitation in mm) of a city in csv format

Execution command : command to execute : weathercli temperature Dallas,TX(or any city name)

Requirement : 
1) node installed in machine 

2) npm i -g .

3) execute the command mentioned above weathercli temperature Dallas,TX

4) npm install axios --save (if axios package not installed already as a dependency in package.json)

The CSV file is generated in the bin folder and we can view it directy through any code editor or it also logs the info on command line. 


Created the project using node: npm init -y
Created cli adding following :
"main": "bin/index.js" in package.json,
then specifying in package.json 
"bin": {
    "weathercli": "./bin/index.js"
  }
