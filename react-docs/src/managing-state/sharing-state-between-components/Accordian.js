import "./Accordion.css";
import { useState } from "react";

/*
LIFTING THE STATE UP
1. Remove state from child components
2. Pass hardcoded data from parent component
3. Add state to parent component and pass it down together with event handlers,pass the event handlers down so that the children can change the parent’s state

Uncontrolled Component ( parent cannot influence, because child has its own state)
Controlled Component ( parent can influence behavior,  parent configure child's behavior with props)

Single Source of Truth
For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”. It doesn’t mean that all state lives in one place—but that for each piece of state, there is a specific component that holds that piece of information. Instead of duplicating shared state between components, lift it up to their common shared parent, and pass it down to the children that need it.
*/

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Major Frontend Frameworks</h2>

      <Panel
        title="Angular"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Angular is a platform and framework for building single-page client
        applications using HTML and TypeScript. Angular is written in
        TypeScript.
      </Panel>
      <Panel
        title="React"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes.
      </Panel>
      <Panel
        title="Vue"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for
        building user interfaces. It builds on top of standard HTML, CSS, and
        JavaScript and provides a declarative and component-based programming
        model that helps you efficiently develop user interfaces, be they simple
        or complex.
      </Panel>
    </>
  );
}
