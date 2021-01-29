// --------------------------------------------------------------------------------------------------
//
// eToro Daily Stock Data in Google Sheets
//
// --------------------------------------------------------------------------------------------------
 
// Custom menu.
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('eToro')
      .addItem('Get Stock Data','calleToroAPI')
      .addToUi();
}


// Function to call the eToro API.
function calleToroAPI() {

  //Get the active Spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  //Find the sheet we want.
  var sheet=ss.getSheetByName("Temp");
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
  sheet.getRange(1, 1, 1000, 5).clearContent();
  
  // paste in the values
  sheet.getRange(1, 1, 1000, 5).setValues(output);

}