const fs = require('fs-extra')
const src = './build/'
const dest = '../dist/client/'
const path = require('path')

try {
	// we remove static because if not every bundle with its own hash will be added in the folder
	fs.emptyDirSync(dest)
	fs.copySync(path.join(src, 'index.html'), path.join(dest, 'index.html'))
	fs.copySync(path.join(src, 'favicon.ico'), path.join(dest, 'favicon.ico'))
	fs.copySync(path.join(src, 'images'), path.join(dest, 'images'))
	//fs.copySync(path.join(src, 'manifest.json'), path.join(dest, 'manifest.json'))
	fs.copySync(path.join(src, 'service-worker.js'), path.join(dest, 'service-worker.js'))
	fs.copySync(path.join(src, 'static'), path.join(dest, 'static'))
	console.log("Dossier client/build copié avec succès")
} catch (err) {
	console.error("Erreur dans copie dossier client/build", err)
}

// autre méthode : en utilisant le contenu de asset-manifest.json
/*
const file = require('./build/asset-manifest.json')['main.js']

const targets = ["main.js", "main.css"]

for (let target of targets) {

	let file = require('./build/asset-manifest.json')[target]
	console.log(`${src}${file} => ${dest}${target}`)

	if (!fs.existsSync(dest)) {
		fs.mkdirSync(dest)
	}

	if (fs.existsSync(dest + target)) {
		fs.unlinkSync(dest + target)
	}

	// took out the map-stripping, but kept the read/write (vs copy) so that similar processing is easy to add
	fs.readFile(src + file, 'utf8', (err, data) => {
		if (err) {
			console.log('Unable to read file from manifest.')
			process.exit(1)
		}
		fs.writeFileSync(dest + target, data)
	})
}
*/