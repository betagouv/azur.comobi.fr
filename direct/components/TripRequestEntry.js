import React, { useState } from 'react'
import htm from 'htm'
import styled from 'styled-components'

const html = htm.bind(React.createElement)

let Input = styled.input`
	margin: 0 0.6rem 0 0.6rem;
	border: 3px solid steelblue;
	border-radius: 0.3rem;
	padding: 0.2rem 0.3rem;
	font-size: 110%;
`

const CityInput = ({ label, input, setInput }) => {
	return html`
		<div>
			<label>
				<${styled.strong`
					display: inline-block;
					width: 4.5rem;
				`}>${label}</strong>
				<${Input}
					type="text"
					list="valid-place-names"
					value=${input.text}
					onChange=${e => {
						const value = e.target.value
						setInput({ text: value, validated: false })
					}}
				/>
				${input.validated && '✔'}
			</label>
		</div>
	`
}
export default function TripRequestEntry({
	tripRequest,
	validPlaceNames,
	onTripRequestChange
}) {
	/*
	To be re-enabled after Dec 28th 2020
	https://github.com/betagouv/comobi_valberg/issues/31

	const [origin, setOrigin] = useState({
		text: tripRequest.origin,
		validated: false
	})
	const [destination, setDestination] = useState({
		text: tripRequest.destination,
		validated: false
	})

	return html`
		<${styled.h2`
			text-align: center;
			margin: 0 0 1.5rem;
		`} key="h2">Où allez-vous ?</h2>
		<form key="form" className="trip-request-entry" onSubmit=${e => {
			e.preventDefault()
			onTripRequestChange({
				origin: origin.text,
				destination: destination.text
			})
		}}>
			<datalist id="valid-place-names">
				${validPlaceNames.map(validPlaceName => {
					return html`
						<option key=${validPlaceName} value=${validPlaceName} />
					`
				})}
			</datalist>
			<section className="geography">
				<${CityInput} key="départ" label="Départ" input=${origin} setInput=${setOrigin} />
				<${CityInput}
					key="arrivée"
					label="Arrivée"
					input=${destination}
					setInput=${setDestination}
				/>
			</section>
			<button type="submit">Rechercher</button>
		</form>
	`
	*/
	return html`
		<${styled.h2`
			text-align: center;
			margin: 1.5rem 0;
		`}>azur.comobi sera ouvert aux passagers et passagères le 28 décembre 2020 !</h2>
		<${styled.p`
			text-align: center;
			margin: 1.5rem 0;
		`}>Pour le moment, les conducteurs et conductrices s'inscrivent...</p>
	`
	
}
