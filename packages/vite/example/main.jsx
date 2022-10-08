import ReactDOM from "react-dom";
import { Input } from "tdesign-react";
import { debounce } from "test";

console.log("debounce", debounce);
console.log("Input", Input);

ReactDOM.render(<Input />, document.getElementById("app"));
