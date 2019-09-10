import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">Project Title - {id} </span>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias asperiores ipsa sequi hic totam, magnam libero harum minima nesciunt illum dolorem maxime, voluptatem veniam atque molestias voluptates quos accusantium!</p>
					</div>
					<div className="card-action gray lighten-4 gray-text">
						<div>Posted by The Net Ninja</div>
						<div>2nd, September, 2am</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
