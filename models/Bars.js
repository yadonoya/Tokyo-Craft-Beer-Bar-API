class Bars {
    constructor() {
        this.db = require('../db/db')
    }

    async findAllBars() {
        try {
            return await this.db('Bars')
                .select(['bar_name', 'station', 'smoking_allowed'])
        } catch(err) {
            return err;
        };
    };

    async findAllSmokingBars() {
        try {
            return await this.db('Bars')
                .select(['bar_name', 'station', 'smoking_allowed'])
                .where('smoking_allowed', 't');
        } catch(err) {
            return err;
        };
    };


    async findByName(bar_name) {
        try {
            return await this.db('Bars')
                .select()
                .where('bar_name', bar_name)
        } catch(err) {
            return err;
        }
    }

    async updateBar(bar_name, edits) {
        try {
            await this.db('Bars')
                .where('bar_name', bar_name)
                .update(edits)
                .timeout(1500);
                return `${bar_name} was successfully edited!`
        } catch(err) {
            return err;
        };
    }

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
        };
    }

    async deleteBar(bar_name) {
        try {
            await this.db('Bars')
            .where('bar_name', bar_name)
            .del();
            return 'Successfully deleted bar!'
        } catch(err) {
            console.log(err);
            return err;
        };
    };
};

module.exports = new Bars();