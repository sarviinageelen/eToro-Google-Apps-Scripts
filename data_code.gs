// --------------------------------------------------------------------------------------------------
//
// eToro Daily Stock Data in Google Sheets
//
// --------------------------------------------------------------------------------------------------
 
// Custom menu.
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('eToro')
      .addItem('Get BABA Data','callStockOne')     
      .addItem('Get 9988.HK Data','callStockTwo')    
      .addItem('Clear Sheet','clearSheet')
      .addToUi();
}


// Function to call Stock One API.
function callStockOne() {

  //Get the active Spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  //Find the sheet we want.
  var sheet=ss.getSheetByName("Data");
  //Activate that sheet.
  sheet.activate() 
  
  // Call the iTunes API
  var response = UrlFetchApp.fetch("https://candle.etoro.com/candles/desc.json/OneDay/1000/1155");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  var results = data["Candles"][0]["Candles"];

  var output = []
  
  results.forEach(function(elem) {
    output.push([elem["FromDate"],elem["Open"],elem["High"],elem["Low"],elem["Close"]]);
  });

  // clear any previous content
  var range = sheet.getRange("A3:E");
  range.clearContent();
  
  // paste in the values
  sheet.getRange(3, 1, output.length, output[0].length).setValues(output);


}


// Function to call Stock Two API.
function callStockTwo() {

  //Get the active Spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  //Find the sheet we want.
  var sheet=ss.getSheetByName("Data");
  //Activate that sheet.
  sheet.activate() 
  
  // Call the iTunes API
  var response = UrlFetchApp.fetch("https://candle.etoro.com/candles/desc.json/OneDay/1000/2402");
  
  // Parse the JSON reply
  var json = response.getContentText();
  var data = JSON.parse(json);
  
  var results = data["Candles"][0]["Candles"];

  var output = []
  
  results.forEach(function(elem) {
    output.push([elem["FromDate"],elem["Open"],elem["High"],elem["Low"],elem["Close"]]);
  });

  // clear any previous content
  var range = sheet.getRange("F3:J");
  range.clearContent();
  
  // paste in the values
  sheet.getRange(3, 6, output.length, output[0].length).setValues(output);


}


// Function to clear the sheet.
function clearSheet() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Data");
  var range = sheet.getRange("A3:Z");
  range.clearContent();

}

