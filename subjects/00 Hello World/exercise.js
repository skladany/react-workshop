////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - change the contents of the render function and save the file
// - see the updates automatically in your browser without refreshing!
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

const node = document.getElementById("app")

const people = [
	{ firstName: "Michael", lastName: "Jackson"},
	{ firstName: "Home", lastName: "Simpson"},
];

function PeopleList(props) {
	const people = props.people;

	return (
		<ul className={props.className} >
		{people.map((person, index) => (
			<li>
				{index+1} {person.firstName} {person.lastName}
			</li>
		))}
		</ul>
	);
}

const element = <PeopleList className="hot" people={people} />;

ReactDOM.render(element,node);

// function App() {
//   return <div>Hello world!</div>;
// }

// ReactDOM.render(<App />, document.getElementById("app"));
