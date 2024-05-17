import React, {useEffect, useState} from 'react';
import {Box, Text} from 'ink';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1);
		}, 1000);
	}, []);

	return (
		<Box flexDirection="column" alignItems="center" justifyContent="center">
			<Text>
				Hello
				<Text color="green">
					{name} - {count}
				</Text>
			</Text>
		</Box>
	);
}
