import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(heading); // returns object
// root.render(heading) // render job is to create html from object and add into react dom

// how to write nested div in react

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, React.createElement("h1", { id: "h1" }, "I'm h1 Tag")))

// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
// parent with siblings

const parent1 = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "h1" }, "I'm h1 Tag"), React.createElement("h2", { id: "h1s" }, "I'm h1 Tag")]))


// <div id="parent">
//     <div id="child1">
//         <h1></h1>
//         <h2></h2>
//     </div>
//    <div id="child2">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
// parent with root siblings

const parent2 = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "h1" }, "I'm h1 Tag"), React.createElement("h2", { id: "h1s" }, "I'm h2 Tag")]), React.createElement("div", { id: "child" },
            [React.createElement("h1", { id: "h1" }, "I'm h1 Tag"), React.createElement("h2", { id: "h1s" }, "I'm h2 Tag")])]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent2)
// ReactElement(Object) => HTML(Browser Understand)


