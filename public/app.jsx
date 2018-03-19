var React = require('react');
var ReactDOM = require('react-dom');
const Tabs = require('Tabs');
const Data = require('./data');
ReactDOM.render(
  <Tabs data={Data}/>,
  document.getElementById('app')
);
