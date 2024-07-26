import { createRoot } from 'react-dom/client'
import { App } from './App'
import { HashRouter } from 'react-router-dom'

// to enable debug module, see https://github.com/visionmedia/debug#browser-support
if (localStorage && import.meta.env.PUBLIC_MODE !== 'production') {
	console.log(`Starting appli payroll-app-next. Environment :`, import.meta.env.PUBLIC_MODE)
	localStorage.debug = import.meta.env.PUBLIC_DEBUG
}

const root = createRoot(document.getElementById('root')!)

root.render(
	<HashRouter>
		<App />
	</HashRouter>,

)
