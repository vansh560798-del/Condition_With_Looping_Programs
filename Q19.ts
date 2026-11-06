// Print star pattern using nested for loops
for (let i: number = 1; i <= 5; i++) {
    let pattern: string = "";

    for (let j: number = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    console.log(pattern);
}
