import React from 'react'

function Player({ props }) {
	return (
		<div className="card font-mono" key={props.email}>
			<div className="m-2 p-2 border-2" key={props.email}>
				<h3>{props.name}</h3>
				<p>Rating: {props.rating}</p>
				<p>Registration Date: {props.registrationDate}</p>
			</div>
		</div>
	)
}

export default Player