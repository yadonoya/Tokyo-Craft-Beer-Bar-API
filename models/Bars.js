class Bars {
    constructor() {
        this.db = require('../db/db')
    }

    async findAllBars() {
        try {
            return await this.db('Bars')
                .select(['bar_name'])
        } catch(err) {
            return err;
        };
    };
};

module.exports = new Bars();