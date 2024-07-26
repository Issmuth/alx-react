import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders correctly without crashing', () => {
    render(<App />);
});

test('renders header div with class name App-header', () => {
    const { container } = render(<App />);
    const headerDiv = container.querySelector('.App-header');
    expect(headerDiv.tagName).toBe('DIV');
})

test('renders header div with class name App-body', () => {
    const { container } = render(<App />);
    const headerDiv = container.querySelector('.App-body');
    expect(headerDiv.tagName).toBe('DIV');
})

test('renders header div with class name App-footer', () => {
    const { container } = render(<App />);
    const headerDiv = container.querySelector('.App-footer');
    expect(headerDiv.tagName).toBe('DIV');
})

