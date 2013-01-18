var model = arguments[0];

function openLink(e) {
	var win = Ti.UI.createWindow();
	win.add(Ti.UI.createWebView({
		url: model.get('link')
	}));
	OS_IOS ? Alloy.Globals.navgroup.open(win) : win.open();
}

$.theColor.backgroundColor = model.get('color');
$.name.text = 'Name: ' + model.get('color');
$.hexCode.text = 'Hex: ' + model.get('hexCode');
$.wavelength.text = 'Wavelength: ' + model.get('wavelength');