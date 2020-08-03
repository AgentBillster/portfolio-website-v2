import React from 'react';

export const Loading = () => {
	var ans = [];
	for (let i = 0; i <= 100000; i++) {
		ans.push(i);
	}

	return (
		<div className="nums">
			{ans.map((ele) => {
				return <p>{ele} + </p>;
			})}
		</div>
	);
};
