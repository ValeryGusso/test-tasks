import { useState, useRef } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const id = useRef<null | ReturnType<typeof setInterval>>(null);

	function printTime(value: number) {
		const s = value % 60;
		const m = Math.floor((value / 60) % 60);
		const h = Math.floor(value / 3600);
		return `${h < 9 ? '0' + h : h}:${m < 9 ? '0' + m : m}:${s < 9 ? '0' + s : s}`;
	}

	function startTimer() {
		if (id.current) {
			clearInterval(id.current);
			id.current = null;
		}
		id.current = setInterval(() => {
			setCount(prev => {
				if (prev === 0) {
					clearInterval(id.current!);
					return prev;
				}
				return prev - 1;
			});
		}, 1000);
		setIsTimerRunning(true);
	}

	function stopTimer() {
		if (id.current) {
			clearInterval(id.current);
			id.current = null;
		}
		setIsTimerRunning(false);
	}

	return (
		<div>
			<div>
				<input value={count} onChange={e => setCount(+e.target.value)} type="number" />
				<button onClick={isTimerRunning ? stopTimer : startTimer}>{isTimerRunning ? 'stop' : 'start'}</button>
			</div>
			<br />
			<p>{printTime(count)}</p>
		</div>
	);
}

export default App;
