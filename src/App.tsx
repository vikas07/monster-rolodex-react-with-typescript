import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.componet';

import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);// Our setState is expect a monster array as a actual defination of what gets received as the argument.
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);// setMonsters is equal to some function where the value is a set state action that receives the monsters array as the actual type.
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString)
  };

  return (
    <div className="App" >
      <h1 className='app-title'> {title}</h1>
      <SearchBox
        className="monster-serach-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <br />
      <SearchBox
        className="title-serach-box"
        onChangeHandler={onTitleChange}
        placeholder="Set Title"
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  )
}

export default App;
