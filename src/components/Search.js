import React, {useState} from 'react';

function Search(props) {
  
    const [searchTerm, setSearchTerm] = useState("");
    const [inputValueCategory, setInputValueCategory] = useState('');
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
    };

    const handleChangeCategory = event => {
      setInputValueCategory(event.target.value);
    };
    
    const renderProducts = () =>
    props.data.map((productItem) => {
      const nameCondition = productItem.name === searchTerm || searchTerm === '';
      const categoryCondition = productItem.categoryId === Number(inputValueCategory) || inputValueCategory === '';

      return nameCondition && categoryCondition ?
      <div key={productItem.id}>
        <div>
          <h3>{productItem.name}</h3>
          <p>{productItem.content}</p>          
        </div>
      </div> : null
});
    
    
     return (
       <div>
          <form>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/> 
                <input type="text" placeholder="Search" value={inputValueCategory} onChange={handleChangeCategory}/> 
          </form>
          <select onChange={handleChangeCategory}>
            <option value="null">Wybierz</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          {renderProducts()}
       </div>
     );
   }

export default Search;