// API - https://candle.etoro.com/candles/desc.json/OneDay/1000/1155

// --------------------------------------------------------------------------------------------------
//
// eToro Daily Stock Data in Google Sheets
//
// --------------------------------------------------------------------------------------------------
 
// custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom eToro Menu')
      .addItem('Get Stock Data','displayStockData')
      .addToUi();
}