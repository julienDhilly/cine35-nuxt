window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {
   googletag.pubads().set("adsense_background_color", "FAFAD2");
});

googletag.cmd.push(function() {
   // banner
   const bannerResponsive = googletag.sizeMapping()
   //.addSize([1024, 768], [970, 250])
   .addSize([980, 690], [728, 90])
   .addSize([640, 480], [728, 90])
   .addSize([0, 0], [320, 50])
   .build();
   const adUnitPath = '/6355419/Travel/Europe/France/Paris';
   const supportedSizes =  [[728, 90], [320, 50]];
   googletag.defineSlot(adUnitPath, supportedSizes, 'google-ads-test-banner')
   .defineSizeMapping(bannerResponsive)
   .addService(googletag.pubads())
   .setTargeting('test', 'infinitescroll');
});

googletag.cmd.push(function() {
   // 300x600 & 300x250
   const columnResponsive = googletag.sizeMapping()
   .addSize([1024, 768], [300, 600])
   .addSize([980, 690], [300, 600])
   .addSize([640, 480], [300, 250])
   .addSize([0, 0], [300, 250])
   .build();
   const adUnitPath = '/6355419/Travel/Europe/France/Paris';
   const columnSupportedSizes =  [[300, 600], [300, 250]];
   googletag.defineSlot(adUnitPath, columnSupportedSizes, 'google-ads-test-colomn-1')
   .defineSizeMapping(columnResponsive)
   .addService(googletag.pubads())
   .setTargeting('test', 'infinitescroll');
});

googletag.cmd.push(function() {
   // enable service
   googletag.pubads().enableSingleRequest();
   googletag.enableServices();
});

googletag.cmd.push(function () {
   googletag.display("google-ads-test-banner");
   googletag.display("google-ads-test-column-1");
});