import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifcicatons component correcty without crashing', () => {
    render(<Notifications />);
});

test('verify whether Notifications renders 3 list elements', () => {
    const { container} = render(<Notifications />);
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(3);
});


test('verify whether Notifications renders the text Here is the list of notifications', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
})