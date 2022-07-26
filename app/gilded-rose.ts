import {Item} from './item';
import {ItemProxy} from './item-proxy';
import {RuleBase} from './Rules/rule-base';
import {SulfurasItemRule} from './Rules/sulfuras-item-rule';
import {ConjuredItemRule} from './Rules/conjured-item-rule';
import {AgedBrieItemRule} from './Rules/aged-brie-item-rule';
import {BackstagePassesItemRule} from './Rules/backstage-passes-item-rule';
import {NormalItemRule} from './Rules/normal-item-rule';
import {ItemQualityRuleEngine} from './item-quality-rule-engine';

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
        const engine = new ItemQualityRuleEngine.Builder()
            .withAgedBrieItemRule()
            .withBackstagePassesItemRule()
            .withConjuredItemRule()
            .withSulfurasItemRule()
            .build();
        engine.applyRules(item);
    }
}
