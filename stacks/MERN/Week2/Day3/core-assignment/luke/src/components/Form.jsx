import React from 'react'
import { useState} from 'react'

const Form = () => {

const {type, setType} = useState ("people");
const {id , setId} = useState ("id");
// const history = useHistory();

const search =(e) => { 
    e.preventDefault();
    // history.push(`/${type}/${id}`);
}


  return (
    <div>
    <form onSubmit={search}>
    <label>Search For </label>
    <select onChange={e => setType(e.target.value)} value={type}>
    <option value="">People</option>
    <option value="">Planets</option>
    </select>
    <label >  Id  </label>
    <input type="number" onChange={e=> setId(e.target.value)} value={id} />
    <input type="submit" value="search"/>
    </form>
    
    </div>
  )
}

export default Form