// kaboom dev file
import * as esbuild from "https://deno.land/x/esbuild@v0.15.7/mod.js";
import { httpImports } from "https://deno.land/x/esbuild_plugin_http_imports@v1.2.4/index.ts";
import { opine, serveStatic } from "https://deno.land/x/opine@2.3.3/mod.ts";
import * as path from "https://deno.land/std@0.57.0/path/mod.ts";

const __filename = path.fromFileUrl(import.meta.url);
const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
const app = opine();

function buildGame() {
	esbuild.build({
		bundle: true,
		entryPoints: ["code/main.ts"],
		plugins: [httpImports({
			allowPrivateModules: true,
			defaultToJavascriptIfNothingElseFound: true,
			disableCache: false,
		})],
		sourcemap: true,
		target: "es6",
		keepNames: true,
		logLevel: "silent",
		outfile: "dist/game.js",
	});
}

app.get("/", (_req, res) => {
	buildGame();
	
	res.sendFile(__dirname + "/index.html");
});

app.use(serveStatic(__dirname));

app.listen(3000, () =>
	console.log("server has started on http://localhost:3000 🚀")
);
