const Manager= require('../lib/Manager');
const manager = new Manager ('Charlie', 0002, 'Charlie@gmail.com');

test('test if we can get the constructor values for the manager object', () => {
expect(manager.name).toBe('Charlie');
expect(manager.id).toBe(0002);
expect(manager.email).toBe('Charlie@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Charlie');
});

test('test if we can get the id from the getId() method', ()=> {
    expect(manager.getId()).toBe('0002');
});

test('test if we can get the email from the getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('Charlie@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', ()=> {
    expect(manager.getOfficeNumber()).toBe(128)
})

test('test if we can get the role from the getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});

