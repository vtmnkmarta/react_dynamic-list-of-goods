import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll().then(goods => {
      setGoodsList(goods);
    });
  };

  const hahandle5First = () => {
    get5First().then(setGoodsList);
  };

  const hahandleRedGoods = () => {
    getRedGoods().then(setGoodsList);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hahandle5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={hahandleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
