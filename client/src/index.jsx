import React from "react";
import ReactDOM from "react-dom";

const cowListData = [
  { id: 1, name: "joe", description: "cow named joe" },
  { id: 2, name: "bob", description: "cow named bob" },
  { id: 3, name: "charlie", description: "cow named charlie" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <CowList cowList={cowListData} />
      </div>
    );
  }
}

const CowList = ({ cowList }) => {
  return (
    <div>
      <div>List of cows:</div>
      <ol>
        {cowList.map(e => (
          <CowEntry cow={e} key={e.id} />
        ))}
      </ol>
    </div>
  );
};

const CowEntry = ({ cow }) => {
  return <li>{cow.name}</li>;
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
