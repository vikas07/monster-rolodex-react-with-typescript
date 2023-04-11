//import { ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';


import './search-box.styles.css';

//Extend interface examples

// interface ISearchBoxProps extends IChangeHandlerProps {
//     className: string;
//     placeholder?: string; // "?" is indicate that it get either string or null value.

// }

// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => void

// }

//OR

// interface ISearchBoxProps {
//     className: string;
//     placeholder?: string; // "?" is indicate that it get either string or null value.

// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void;

// }



//Union type example

// type CanadianAddress = {
//     street: string;
//     province: string;
// }

// type USAddress = {
//     street: string;
//     state: string;
// }

// type ItalianAddress = {
//     street: string;
//     region: string;
// }

// type Address = CanadianAddress | USAddress | ItalianAddress; //Union Type

// const Address: Address = {
//     street: 'sabc',
//     region: 'asdf'
// }

//Passing Props
type SearchBoxProps = {
    className: string;
    placeholder?: string; // "?" is indicate that it get either string or null value.
    //onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

export default SearchBox
