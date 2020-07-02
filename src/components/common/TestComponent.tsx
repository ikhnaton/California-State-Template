import React from 'react';

type props = { num1: number, num2: number };
export const TestComponent: React.FunctionComponent<props> = ({ num1, num2 }: props) =>
{
	const value = num1 + num2;

	return (
		<>
			{value}
		</>
	);
};
