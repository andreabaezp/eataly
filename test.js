

console.log('test 1')
console.log('test 2')
console.log('test 3')

const res = await axios.get('https://google.com')

console.log('test 4')

const myFunc = () => {
    var x = 3;
    var y = 5;
    const add = (a, b) => {
        return a + b;
    }
    const result = add(x, y)
    return result
}



