import React from 'react';
import Rating from './components/Rating';

function App() {
  return (
    <>
      <Rating
        heading='How do you feel about react?'
        color='green'
        feedbackMessages={[
          'Hate it',
          'Dislike it',
          'Meh',
          'Like it',
          'Love it',
        ]}
      />
    </>
  );
}

export default App;
