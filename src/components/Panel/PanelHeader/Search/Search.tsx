import React from 'react';
import { Input } from 'antd';

const Search: React.FC = () => {

  return (
    <Input.Search
      placeholder="Szukaj"
      onSearch={value => console.log(value)}
      enterButton
    />
  )
};

export default Search;
