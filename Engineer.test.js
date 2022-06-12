const Engineer = require("../Engineer");
const engineer = new Engineer ('Abdi', 0002, '');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Abdi');
    expect(engineer.id).toBe(0002);
    expect(engineer.email).toBe('');
    });
    
    test('test if we can get the name from the getName() method', () => {
        expect(engineer.getName()).toBe('');
    });
    
    test('test if we can get the id from the getId() method', ()=> {
        expect(engineer.getId()).toBe('0004');
    });

    test('test if we can get the email from the getEmail() method', ()=> {
        expect(engineer.getEmail()).toBe('');
    });