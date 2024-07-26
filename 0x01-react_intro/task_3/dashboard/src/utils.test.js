import * as utils from './utils';


test('Returns current year', () => {
    let current = new Date().getFullYear
    expect(utils.getFullYear()).toBe(current);
});

test('Returns Correct string', () =>{
    expect(utils.getFooterCopy(true)).toBe('Holberton School');
    expect(utils.getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('Returns correct string', () => {
    expect(utils.getLatestNotification()).toBe('<strong>Urgent requirement<strong/> - complete by EOD');
})