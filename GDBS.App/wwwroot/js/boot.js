
// Tooltips configuration
$(document).tooltip({ selector: '[data-toggle=tooltip]' });

// Download app with version & boot
System.import('boot').catch(console.error.bind(console))
