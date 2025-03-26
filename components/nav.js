// Example of using a component inside another component
import navItem from "./navItem.js";
import html from "html-literal";

// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default (navItems) => {
  return html`
    <nav>
      <i class="fas fa-bars"></i>
      <ul class="">
        ${navItems.map((item) => navItem(item)).join("")}
      </ul>
    </nav>
  `;
};
