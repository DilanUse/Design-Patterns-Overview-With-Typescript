import {Item} from './item';
import {ItemProxy} from './item-proxy';
import {RuleBase} from './Rules/rule-base';
import {SulfurasItemRule} from './Rules/sulfuras-item-rule';
import {ConjuredItemRule} from './Rules/conjured-item-rule';
import {AgedBrieItemRule} from './Rules/aged-brie-item-rule';
import {BackstagePassesItemRule} from './Rules/backstage-passes-item-rule';
import {NormalItemRule} from './Rules/normal-item-rule';

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
        const rules = new Array<RuleBase>();
        rules.push(new SulfurasItemRule());
        rules.push(new ConjuredItemRule());
        rules.push(new AgedBrieItemRule());
        rules.push(new BackstagePassesItemRule());
        rules.push(new NormalItemRule());

        for (const rule of rules) {
            if (rule.isMatch(item)) {
                rule.updateItem(item);
                break;
            }
        }
    }
}
