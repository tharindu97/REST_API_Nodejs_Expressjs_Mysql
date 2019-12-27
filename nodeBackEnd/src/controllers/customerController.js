const controller = {}

controller.test = (req, res) => {
    const data = {
        name: "tharindu kavishna",
        age: 22,
        city:'panama'
    }

    console.log('Send data from controller employee');
    res.json(data);
}

module.exports = controller;