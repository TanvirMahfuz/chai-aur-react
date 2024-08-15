const reactElement = {
  // suppose I set a rule that if you want to declare an element, this is how to do it
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "visit google",
};
function customRender(reactElement, mainContainer) {
  const {type, props, children} = reactElement;
  const domElement = document.createElement(type);
  domElement.innerHTML = children;
  for (let i in props) {
    if (props.hasOwnProperty(i)) domElement.setAttribute("href", props[i]);
    //hasOwnProperty checks if the properties we are checking purely belongs to props, or are they inherited
  }
  mainContainer.appendChild(domElement);
  console.log(mainContainer);
}
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
