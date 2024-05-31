cloneElement создает новый элемент React, используя другой элемент в качестве отправной точки.

const clonedElement = cloneElement(element, props, ...children);

const clone = cloneElement(
<Row title="Cabbage">
Hello
</Row>,
{ isHighlighted: true },
'Goodbye'
);

clone - (<Row title="Cabbage" isHighlighted={true}>Goodbye</Row>)

createElement создает елемент React. Альтернатива написанию через jsx

const element = createElement(type, props, ...children)

const MyComponent = () => {
return createElement('h1', {name:'Tom'}, <p>ppp<p>)
}
