// Assignment2.jsx

import React from 'react';

// Step 1: Create an object representing the React element
const reactElement = {
  type: 'a',
  props: {
    href: 'https://example.com',
    children: 'Click me',
  },
};

// Step 2: Function to generate HTML code from React element object
function generateHTML(element) {
  const { type, props } = element;
  const { children, ...attributes } = props;
  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
  const childrenString = Array.isArray(children) ? children.join('') : children;
  return `<${type} ${attributesString}>${childrenString}</${type}>`;
}

// Step 3: Function to render the React element dynamically
function customRender(element, path) {
  const html = generateHTML(element);
  document.querySelector(path).innerHTML = html;
}

// Exporting the component
export default function Assignment3() {
  // Call the customRender function with the reactElement and path to render
  React.useEffect(() => {
    customRender(reactElement, '#root');
  }, []);

  return <div id="root"></div>;
}
