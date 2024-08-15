const htmlModules = import.meta.glob('./*.html', { query: '?raw', import: 'default' })

const htmlFiles = {}

for (const [path, module] of Object.entries(htmlModules)) {
  const fileName = path.replace('./', '').replace('.html', '')
  htmlFiles[fileName] = module
}

export default htmlFiles
