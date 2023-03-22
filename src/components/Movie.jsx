

function Movie(props) {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<div className="card-image">
						<img src={props.poster} alt="poster" />
						<span className="card-title">{props.title}</span>
					</div>
					<div className="card-content">
						<p>{props.type}</p>
						<p>{props.year}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export {Movie}