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
