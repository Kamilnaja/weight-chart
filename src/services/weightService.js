import Data from '../data.json';

export default class WeightService {
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

    getParsedDataObject() {
        let parsedDataObj = this.itemList;
        for (var i in this.itemList) {
            parsedDataObj[i].date = new Date(parsedDataObj[i].date).toDateString();
        }
        return parsedDataObj;
    }

    getParsedData() {
        return this.parsedData;
    }
}
