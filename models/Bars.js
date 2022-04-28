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

    async createBar(bar_name, station, smoking_allowed) {
        try {
            await this.db('Bars')
                .insert({
                    bar_name: bar_name,
                    station: station,
                    smoking_allowed: smoking_allowed,
                });
                return "Bar successfully created"
        } catch (err){
            return err;
        }
    }
};

module.exports = new Bars();