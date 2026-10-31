function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Ariya Shahid | Product Marketing')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
