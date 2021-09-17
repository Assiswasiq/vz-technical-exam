before(async () => {
    try {
        console.log('before')
        return;
    } catch (err) {
        console.log(err);
    }
});

after(async () => {
    try {
        console.log('after')
        return;
    } catch (err) {
        console.log(err);
    }
});