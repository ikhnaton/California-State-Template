import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./app.scss";
import { Header } from './components/common/Header';
import { TestComponent } from './components/common/TestComponent';

const App = () =>
{
	return (
		<BrowserRouter>
			<Header/>
			<div className="fix">
			</div>
			<div className="blue">
				5 + 7 = <TestComponent num1={5} num2={7} />
			</div>
		</BrowserRouter>
	);
};

document.addEventListener("DOMContentLoaded", () =>
{
	ReactDOM.render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>,
		document.getElementById("root")
	);
});
