const Manager= require('../lib/Manager');
const manager = new Manager ('Abdi', 0002, 'aishahajisirad2003@outlook.com');

test('test if we can get the constructor values for the manager object', () => {
expect(manager.name).toBe('Abdi');
expect(manager.id).toBe(0002);
expect(manager.email).toBe('');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Abdi');
});

test('test if we can get the id from the getId() method', ()=> {
    expect(manager.getId()).toBe('0002');
});

test('test if we can get the email from the getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('aishahajisirad2003@outlook.com');
});

test('test if we can get the office number from the getOfficeNumber() method', ()=> {
    expect(manager.getOfficeNumber()).toBe(128)
})

test('test if we can get the role from the getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});

