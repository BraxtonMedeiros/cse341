const awesomeFunction = (req, res, next) => {
    res.json('Trayson Kelii');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
}

module.exports = { awesomeFunction, returnAnotherPerson };