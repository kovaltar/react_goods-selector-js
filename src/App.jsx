import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const GoodsTable = ({ selectGood, selectedGood }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <Good
          good={good}
          key={good}
          selectGood={selectGood}
          selectedGood={selectedGood}
        />
      ))}
    </tbody>
  </table>
);

export const Good = ({ good, selectGood, selectedGood }) => (
  <tr
    data-cy="Good"
    className={selectedGood === good ? 'has-background-success-light' : ''}
  >
    <td>
      <Button
        good={good}
        selectGood={selectGood}
        isSelected={selectedGood === good}
      />
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);

export const Button = ({ good, isSelected, selectGood }) => (
  <button
    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
    type="button"
    className={`button ${isSelected ? 'is-info' : ''}`}
    onClick={() => selectGood(isSelected ? null : good)}
  >
    {isSelected ? '-' : '+'}
  </button>
);

export const App = () => {
  const [selectedGood, selectGood] = useState('Jam');
  const xButton = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => selectGood(null)}
    />
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== null
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood && xButton}
      </h1>

      <GoodsTable selectGood={selectGood} selectedGood={selectedGood} />
    </main>
  );
};
