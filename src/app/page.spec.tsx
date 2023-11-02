import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Test Suite', () => {
  it('Test Case', () => {
    const { getByRole } = render(<Page />);
    const heading = getByRole('heading');

    screen.debug(heading);

    expect(heading).toHaveTextContent(/Hello World!/i);
  });
});
