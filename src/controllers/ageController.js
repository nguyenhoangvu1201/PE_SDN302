exports.calculateAge = (req, res) => {
    const { birthYear } = req.body;
    const age = new Date().getFullYear() - birthYear;
    res.json({
        data: {
            age,
        },
    });
};