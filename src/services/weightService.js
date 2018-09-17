import Data from '../data.json';

export default class weightService {
    constructor() {
        this.itemList = Data;
        this.getWeightFromItemList();
    }

    getWeightList() {
        return this.itemList
    }

    setWeightList() {
        // todo - edit this
    }

    getWeightFromItemList() {
        let parsedData = [];
        this.itemList.forEach(item => parsedData.push(item.weight));
        return parsedData;
    }

    getDaysFromItemList() {
        let parsedData = [];
        this.itemList.forEach(item => {
            let itemToChangeFormat = new Date(item.date).toDateString();
            parsedData.push(itemToChangeFormat)
        });
        return parsedData;
    }

    getParsedData() {
        return this.parsedData
    }
}