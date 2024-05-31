//-----------------------clonedElement-----------------------------------

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

//-----------------------createElement-----------------------------------

createElement создает елемент React. Альтернатива написанию через jsx

const element = createElement(type, props, ...children)

const MyComponent = () => {
return createElement('h1', {name:'Tom'}, <p>ppp<p>)
}

//----------------------isValidElement-------------------------------

isValidElement проверяет, является ли значение элемнтом React. Возвращает значение true, если valueэто элемент React. В противном случае он возвращается false.

const isElement = isValidElement(value)

isValidElement(<p />) // true
isValidElement(createElement('p')); // true
isValidElement(25); // false
isValidElement('Hello'); // false
isValidElement({ age: 42 }); // false
Только теги и объекты JSX,createElement возвращаемые с помощью , считаются элементами React. Массивы и порталы, созданные с помощью React, createPortalтакже не считаются элементами React.
