import {RuleBase} from './Rules/rule-base';
import {SulfurasItemRule} from './Rules/sulfuras-item-rule';
import {ConjuredItemRule} from './Rules/conjured-item-rule';
import {AgedBrieItemRule} from './Rules/aged-brie-item-rule';
import {BackstagePassesItemRule} from './Rules/backstage-passes-item-rule';
import {NormalItemRule} from './Rules/normal-item-rule';
import {ItemProxy} from './item-proxy';

export class ItemQualityRuleEngine {
    private _rules = new Array<RuleBase>();

    public constructor() {
        this._rules.push(new SulfurasItemRule());
        this._rules.push(new ConjuredItemRule());
        this._rules.push(new AgedBrieItemRule());
        this._rules.push(new BackstagePassesItemRule());
        this._rules.push(new NormalItemRule());
    }

    public applyRules(item: ItemProxy): void {
        for (const rule of this._rules) {
            if (rule.isMatch(item)) {
                rule.updateItem(item);
                break;
            }
        }
    }
}
