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

    private updateSulfuras(item: ItemProxy) {
        // do nothing
    }

    private updateAgedBrie(item: ItemProxy) {
        item.incrementQuality();
        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.incrementQuality();
        }
    }

    private updateBackstagePasses(item: ItemProxy) {
        item.incrementQuality();

        if (item.sellIn < 11) {
            item.incrementQuality();
        }

        if (item.sellIn < 6) {
            item.incrementQuality();
        }

        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.resetQuality();
        }
    }

    private updateConjuredItem(item: ItemProxy) {
        item.decrementQuality();
        item.decrementQuality();

        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.decrementQuality();
            item.decrementQuality();
        }
    }

    private updateNormalItem(item: ItemProxy) {
        item.decrementQuality();
        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.decrementQuality();
        }
    }

    private _updateQuality(item: ItemProxy): void {
        if (item.name == 'Sulfuras, Hand of Ragnaros') {
            this.updateSulfuras(item);
            return;
        }

        if (item.name == 'Aged Brie') {
            this.updateAgedBrie(item);
            return;
        }

        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.updateBackstagePasses(item);
            return;
        }

        if (item.name == 'Conjured Mana Cake') {
            this.updateConjuredItem(item);
            return;
        }

        this.updateNormalItem(item);
    }
}
