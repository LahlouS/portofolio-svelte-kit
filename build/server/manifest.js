const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","logo.svg","robots.txt","slahlou.JPG"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain",".JPG":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CZjR1JHH.js",app:"_app/immutable/entry/app.BLB0iGtE.js",imports:["_app/immutable/entry/start.CZjR1JHH.js","_app/immutable/chunks/BqOE_PaJ.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/DTK62OxW.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.BLB0iGtE.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/CMk37LVu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BBeIAOY9.js')),
			__memo(() => import('./chunks/1-CIXQYaOz.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/blog","/privacy-policy","/projects","/provacy-policy","/blog/652555"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about","/blog","/privacy-policy","/projects","/provacy-policy","/blog/652555"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
