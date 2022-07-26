import {Item} from './item';
import {ItemProxy} from './item-proxy';

export class GildedRose {
    private readonly _items: Array<Item>;

    constructor(_items = [] as Array<Item>) {
        this._items = _items;
    }

    public updateQuality() {
        for (const item of this._items) {
            this._updateQuality(new ItemProxy(item));
        }

        return this._items;
    }

    private _updateQuality(item: ItemProxy): void {
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.decrementQuality();
            }
        } else {
            item.incrementQuality();
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn < 11) {
                    item.incrementQuality();
                }
                if (item.sellIn < 6) {
                    item.incrementQuality();
                }
            }
        }
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.decrementSellIn();
        }
        if (item.sellIn < 0) {
            if (item.name != 'Aged Brie') {
                if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.name != 'Sulfuras, Hand of Ragnaros') {
                        item.decrementQuality();
                    }
                } else {
                    item.resetQuality();
                }
            } else {
                item.incrementQuality();
            }
        }
    }
}
