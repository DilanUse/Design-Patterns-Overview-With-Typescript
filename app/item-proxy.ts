import {Item} from './item';

export class ItemProxy {
    private _item: Item;

    public constructor(item: Item) {
        this._item = item;
    }

    public get name(): string {
        return this._item.name;
    };

    public get sellIn(): number {
        return this._item.sellIn;
    };

    public get quality(): number {
        return this._item.quality;
    };

    public incrementQuality() {
        if (this._item.quality < 50) {
            this._item.quality += 1;
        }
    }

    public decrementQuality() {
        if (this._item.quality > 0) {
            this._item.quality -= 1;
        }
    }

    public resetQuality() {
        this._item.quality = 0;
    }

    public decrementSellIn() {
        this._item.sellIn -= 1;
    }

}
