import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { searchCompanies } from './api';
import { CompanySearch } from './company';

function App() {
  const [search, setSearch]=useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] =useState<String>()

  const handleSearchChange=(e:ChangeEvent<HTMLInputElement>)=> {
      setSearch(e.target.value);
      console.log(e);
  };

  const onPortfolioCreate = (e:SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  const onSearchSubmit = async (e:SyntheticEvent) => {
    e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result ==="string") {
        setServerError(result);
      } else if(Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(searchResult);
  }; 
  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      {serverError&& <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
}

export default App;
