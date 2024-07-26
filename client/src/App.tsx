import * as React from 'react'
import moment from 'moment'
import 'moment/dist/locale/fr'
import Debug from 'debug'
// styles globaux
import * as Sentry from "@sentry/react"

// import main from './resources/main.style'
const debug = Debug('App')

moment.locale('fr')

/**
 * a chaque render du composant provoquant une erreur, beforeSend() va être appelé et va afficher la modale de report
 * Il faut donc gérer un flag pour ne l'afficher qu'une seule fois
 */
let isDialogOpened: boolean = false

if (import.meta.env.PUBLIC_SENTRY_DSN) {
	Sentry.init({
		dsn: import.meta.env.PUBLIC_SENTRY_DSN,
		environment: import.meta.env.PUBLIC_MODE,
		beforeSend(event) {
			if (event.exception && event.event_id && !isDialogOpened) {
				isDialogOpened = true
				const user = Sentry.getCurrentScope().getUser()
				//const errMsg = event.exception.values?.[0].value ?? ''
				// https://docs.sentry.io/platforms/javascript/user-feedback/configuration/#crash-report-modal
				setTimeout(() => {
					Sentry.showReportDialog({
						title: "Une erreur inattendue s'est produite",
						user: {
							name: user?.username ?? '',
							email: user?.email ?? ''
						},
						eventId: event.event_id,
						labelSubmit: "Transmettre",
						onClose: () => {
							isDialogOpened = false
						}
					})
				}, 2000)
			}
			return event
		}
	})
}

function ErrorFallbackComponent() {
	return (
		<div>
			Une erreur s'est produite.<br />
			Veuillez recharger la page internet.<br />
			Veuillez nous excuser pour la gêne occasionnée.
		</div>
	)
}

export const App: React.FC = () => {
	debug("we render App.tsx")

	return (
		<Sentry.ErrorBoundary fallback={ErrorFallbackComponent}>
			Hello world
		</Sentry.ErrorBoundary>
	)
}