import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Tasks from 'components/organisms/Tasks';
import Counter from 'components/organisms/Counter';

const App = () => (
  <MainTemplate>
    <Tasks>
      <Counter />
    </Tasks>
  </MainTemplate>
);

export default App;
