import './App.css';
import React from "react";
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

//Imported all Profile components into App.js file and used them.

function App() {
  return (
    <div className="App">
  <ProfilePhoto></ProfilePhoto>
  <FullName></FullName>
  <Address></Address>
    </div>
  );
};

export default App;
