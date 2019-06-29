let str = 'Hello world, i am youssef from morocco you are welcome!';

// counting char in str

const count_char = (str, char) => {
    let count = [...str].reduce((acc,val) => {
        return (val.toLocaleLowerCase() === char) ? acc + 1 : acc;
    }, 0);

    return count;
}

// example
console.log(count_char(str, 'm'));