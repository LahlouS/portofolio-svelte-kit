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
		client: {start:"_app/immutable/entry/start.B-Zo0BSm.js",app:"_app/immutable/entry/app.lICSvIRm.js",imports:["_app/immutable/entry/start.B-Zo0BSm.js","_app/immutable/chunks/DSE7Xsaf.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/DTK62OxW.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.lICSvIRm.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/CMk37LVu.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DN86Fo5m.js')),
			__memo(() => import('./chunks/1-DF8tNIfF.js')),
			__memo(() => import('./chunks/3-BH0QGe-0.js')),
			__memo(() => import('./chunks/4-CUm6yx-6.js')),
			__memo(() => import('./chunks/5-BWOR828H.js')),
			__memo(() => import('./chunks/6-XBzSwh07.js')),
			__memo(() => import('./chunks/7-L9F-D3uN.js')),
			__memo(() => import('./chunks/8-Dq3vE56s.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/provacy-policy",
				pattern: /^\/provacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
