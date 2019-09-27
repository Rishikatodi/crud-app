// //import styled from 'styled-components';
const NewFruit = (props) => {
     let formFields = {}
//     const Input = styled.input.attrs(props => ({
        // we can define static props
  //      type: "text",

//}))
 //        `
 //          color: palevioletred;
 //          font-size: 1em;
 //          border: 2px solid palevioletred;
 //          border-radius: 3px;
 //
 //          /* here we use the dynamically computed prop */
 //          margin: ${props => props.size};
 //          padding: ${props => props.size};
 //        `;

    return(
        <form onSubmit={
            (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.quantity.value); e.target.reset();}
        }>
            <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
            <input ref={input => formFields.description = input} placeholder='Enter a description' />
            <input ref={input => formFields.quantity = input} placeholder='Enter initial quantity' />
            <button>Submit</button>
        </form>
    )
}