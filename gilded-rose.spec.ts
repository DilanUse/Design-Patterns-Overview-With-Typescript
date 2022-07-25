import {GildedRose, Item} from './gilded-rose';

it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
});

test('Subtract both values', () => {
    const gildedRose = new GildedRose([new Item('foo', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(9);
});

test('Once the sell by date has passed, Quality degrades twice as fast', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
});

test('The Quality of an item is never negative', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
});

test('"Aged Brie" actually increases in Quality the older it gets', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(6);
});

test('The Quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(50);
});

test('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(30);
});

describe('"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches', () => {
    test('Quality increases by 1 when there are more of 10 days', () => {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(19);
        expect(items[0].quality).toBe(31);
    });

    test('Quality increases by 2 when there are 10 days or less', () => {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30),
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(9);
        expect(items[0].quality).toBe(32);
        expect(items[1].sellIn).toBe(7);
        expect(items[1].quality).toBe(22);
    });

    test('Quality increases by 3 when there are 5 days or less', () => {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(4);
        expect(items[0].quality).toBe(13);
        expect(items[1].sellIn).toBe(2);
        expect(items[1].quality).toBe(23);
    });

    test('Quality drops to 0 after the concert', () => {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20),
        ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(-1);
        expect(items[0].quality).toBe(0);
        expect(items[1].sellIn).toBe(-2);
        expect(items[1].quality).toBe(0);
    });
});
