import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import store from '@/store';

describe('Home', () => {
  it('should be defined', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});

describe('Last Text Is Rendered', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render the text', () => {
    expect(
      screen.getByText('Welcome to RapidX')
    ).toBeInTheDocument();
  });
});
