# Building a component

1. Class Component and Functional Component

    - There are 2 ways to create a component in React, but in this project we preferred functional component with arrow functions which will look like this:

    ```js
    const Component = () => {
        return(
            <div>Hello World</div>
        );
    }
    ```
2. Types of Props (Parameter)

    - Every props need a type and also `?` which if we put it after the props name it means that those props are optional.

    ```js
    const Component = ({
        props1,
        props2,
        props3
    } : {
        props1: string 
        props2: string | number | undefined
        props3?: boolean
    }) => {
        return(
            <div>Hello World</div>
        );
    }
    ```
    - this means
    1. props1 must be `string`
    2. props2 must be `string` or `number` or `undefined`
    3. props3 must be `boolean` if provided but the prop is not required (optional).
