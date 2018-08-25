import * as React from 'react';
import Specimen from '../Specimen';

function Button({
  children,
  blue,
}: {
  children?: React.ReactNode;
  blue?: boolean;
}) {
  return (
    <button
      type="button"
      style={{
        border: `2px solid ${blue ? 'blue' : 'black'}`,
        background: 'white',
        padding: '1rem',
      }}
    >
      {children}
    </button>
  );
}

export default function ButtonSpecimen() {
  return (
    <Specimen name="button">
      <Specimen name="hello">
        <Button>Hello!</Button>
      </Specimen>
      <Specimen name="goodbye">
        <Button>Goodbye!</Button>
      </Specimen>
      <Specimen name="bonjour">
        <Button>Bonjour</Button>
      </Specimen>
      <Specimen name="blue">
        <Button blue>blue</Button>
      </Specimen>
    </Specimen>
  );
}
