import React from 'react';
import ReactDOM from 'react-dom';

// Source: https://codeburst.io/yet-another-beginners-guide-to-setting-up-a-react-project-part-1-bdc8a29aea22

// Line#4 is a function invocation which takes two arguments: the
// Component/Element to render, and the place where it will be rendered. Hence, both the values are appropriately passed.
ReactDOM.render(
    React.createElement("div", null, "Hello World"), // <div>Hello World</div>
    document.getElementById("root")
);
