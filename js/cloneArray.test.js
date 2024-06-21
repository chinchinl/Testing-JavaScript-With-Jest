const cloneArray = require('./cloneArray')

// Test to check if the cloneArray function properly clones an array
test('Properly clones array', () => {
    const array = [1, 2, 3] //Create brand new array
    // Check if the cloned array is equal to the original array
    expect(
        cloneArray(array)
    ).toEqual(array)
    // Check if the cloned array is not the exact same array
    expect(
        cloneArray(array)
    ).not.tobe(array)
})