import React from 'react';

import './Jest.css';

const Jest = () => {
	return (
		<div>
			<p styleName="jest" className="style">
				Color from CSS Modules
				<br />
				Font Weight from Global.css
			</p>
			<div styleName="online_img" />
		</div>
	);
};
export default Jest;
