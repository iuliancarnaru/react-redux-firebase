const add = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
})

test('should return a greeting from name', () => {
    const result = generateGreeting('Iulian');
    expect(result).toBe(`Hello Iulian!`);
});

test('should return a greeting from no name', () => {
    const result = generateGreeting();
    expect(result).toBe(`Hello Anonymous!`);
});