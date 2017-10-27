var cdn = 'https://unpkg.com/';
var versionPlaceholder = '@{{VERSION}}/';

var leafletPathPrefix = cdn + 'leaflet' + versionPlaceholder + 'dist/';
var mcgPathPrefix = cdn + 'leaflet.markercluster' + versionPlaceholder + 'dist/';
var freezablePathPrefix = cdn + 'leaflet.markercluster.freezable' + versionPlaceholder + 'dist/';


// To be executed after manage-libs-versions is ready.
// https://github.com/ghybs/manage-libs-versions
// https://www.npmjs.com/package/manage-libs-versions
var bundle1 = new manageLibsVersions.Bundle({
	name: 'bundle1',
	libs: [{
		name: 'leaflet',
		mandatory: true,
		versions: [
			_makeLeafletVersionAssets({
				name: '1.2.0',
				defaultVersion: true,
				sriCss: 'sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ==',
				sriSrcJs: 'sha512-YLT+I34kEPlk5OqR5XObf40B7sInrIU+bGe5VcwSpfR5OrFVjExFxfhVoJQEPZQWMyB53o3AU/bb5J91nc8CPA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.1.0',
				sriCss: 'sha512-wcw6ts8Anuw10Mzh9Ytw4pylW8+NAD4ch3lqm9lzAsTxg0GFeJgoAtxuCLREZSC5lUXdVyo/7yfsqFjQ4S+aKw==',
				sriSrcJs: 'sha512-sIPSXEX730B6EcdQyVPmIGp7f7ZrxIuECnkwYtPpEltG6NqOVtmBNoxHkMamNsAOHLMnDFaUoJYA4PWtzNZDuA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.3',
				sriCss: 'sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==',
				sriSrcJs: 'sha512-WXoSHqw/t26DszhdMhOXOkI7qCiv5QWXhH9R7CgvgZMHz1ImlkVQ3uNsiQKu5wwbbxtPzFXd1hK4tzno2VqhpA=='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.2',
				sriCss: 'sha256-9mfj77orHLh2GsN7CbMvpjO/Wny/ZZhR7Pu7hy0Yig4=',
				sriSrcJs: 'sha256-VHkU4jC5FoqC9jHC5YP77Btx6zcwBBoE3v5e2UWExeM='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.1',
				sriCss: 'sha256-B5Af7a59HZfTwOlorb6pQSEj6l8I3jj785fgpPiLnx4=',
				sriSrcJs: 'sha256-TKXcBJJSGl/FfgsHsWSqI/8eI2CVTs+/Z2xlBjnYh4Q='
			}),
			_makeLeafletVersionAssets({
				name: '1.0.0',
				sriCss: 'sha256-PFO9CfQJUoeHCST/XnUtF/RaNuH/LgguGQ1ykt3iA7Y=',
				sriSrcJs: 'sha256-Gga8lgup9173iOt2e8DKISTUSbz+JK6510SjbXoGcsQ='
			}),
			_makeLeafletVersionAssets({
				name: '0.7.7',
				sriCss: 'sha256-ymZGho+WjeQQ2jvjHInYJd0h20DI6/AE0fYq+BGYXqY=',
				sriSrcJs: 'sha256-nYr14YrqqLUvH8oPD82ha4p6ZIZ4emL9VGggPHRTnsE='
			})
		]
	}, {
		name: 'leaflet.markercluster',
		mandatory: true,
		versions: [
			_makeMCGVersionAssets({ name: '1.1.0', defaultVersion: true }),
			_makeMCGVersionAssets({ name: '1.0.6' }),
			_makeMCGVersionAssets({ name: '1.0.5' }),
			_makeMCGVersionAssets({ name: '1.0.4' }),
			_makeMCGVersionAssets({ name: '1.0.3' }),
			_makeMCGVersionAssets({ name: '1.0.2' }),
			_makeMCGVersionAssets({ name: '1.0.1' }),
			_makeMCGVersionAssets({ name: '1.0.0' }),
			_makeMCGVersionAssets({ name: '0.5.0' })
		]
	}, {
		name: 'leaflet.markercluster.freezable',
		mandatory: true,
		versions: [
			_makeFreezableVersionAssets({ name: '1.0.0', disabled: true }), // Disable for now (not published yet)
			_makeFreezableVersionAssets({ name: '0.1.1' }),
			{
				name: 'local',
				defaultVersion: true,
				disabled: true, // Will be enabled if assets are found to be available at runtime.
				assets: [{
					type: 'script',
					path: '../../dist/leaflet.markercluster.freezable-src.js'
				}]
			}
		]
	}]
});

function _makeLeafletVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet(leafletPathPrefix + 'leaflet.css', versionName, options.sriCss),
			manageLibsVersions.makeScript(leafletPathPrefix + 'leaflet-src.js', versionName, options.sriSrcJs)
		]
	};
}

function _makeMCGVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		assets: [
			manageLibsVersions.makeStylesheet(mcgPathPrefix + 'MarkerCluster.css', versionName, options.sriCss),
			manageLibsVersions.makeStylesheet(mcgPathPrefix + 'MarkerCluster.Default.css', versionName, options.sriDefaultCss),
			manageLibsVersions.makeScript(mcgPathPrefix + 'leaflet.markercluster-src.js', versionName, options.sriSrcJs)
		]
	};
}

function _makeFreezableVersionAssets(options) {
	var versionName = options.name;

	return {
		name: versionName,
		defaultVersion: options.defaultVersion,
		disabled: options.disabled,
		assets: [
			manageLibsVersions.makeScript(freezablePathPrefix + 'leaflet.markercluster.freezable-src.js', versionName, options.sriSrcJs)
		]
	};
}
