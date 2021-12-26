import react from "react";

import './search-box.style.css';
export const SearchBox = ({placeholder, handleChange}) => (
    <input className="search" type="Search" 
    placeholder= {placeholder}
    onChange={handleChange}/>

)