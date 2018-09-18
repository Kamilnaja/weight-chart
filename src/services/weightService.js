import Data from '../data.json';

export default class weightService {
    constructor() {
        this.itemList = Data;
        this.getWeightFromItemList();
    }

    getWeightList() {
        return this.itemList;
    }

    setWeightList() {
    }

    getWeightFromItemList() {
        const parsedData = [];
        this.itemList.forEach(item => parsedData.push(item.weight));
        return parsedData;
    }

    getDaysFromItemList() {
        const parsedData = [];
        this.itemList.forEach(item => {
            const itemToChangeFormat = new Date(item.date).toDateString();
            parsedData.push(itemToChangeFormat);
        });
        return parsedData;
    }

    getParsedData() {
        return this.parsedData;
    }
}
