import {RuleBase} from './Rules/rule-base';
import {SulfurasItemRule} from './Rules/sulfuras-item-rule';
import {ConjuredItemRule} from './Rules/conjured-item-rule';
import {AgedBrieItemRule} from './Rules/aged-brie-item-rule';
import {BackstagePassesItemRule} from './Rules/backstage-passes-item-rule';
import {NormalItemRule} from './Rules/normal-item-rule';
import {ItemProxy} from './item-proxy';

export class ItemQualityRuleEngine {
    private _rules: Array<RuleBase>;

    private constructor(rules: Array<RuleBase>) {
        this._rules = rules;
    }

    public applyRules(item: ItemProxy): void {
        for (const rule of this._rules) {
            if (rule.isMatch(item)) {
                rule.updateItem(item);
                break;
            }
        }
    }

    static Builder = class {
        private _builderRules = new Array<RuleBase>();

        public withAgedBrieItemRule() {
            this._builderRules.push(new AgedBrieItemRule());
            return this;
        }

        public withSulfurasItemRule() {
            this._builderRules.push(new SulfurasItemRule());
            return this;
        }

        public withConjuredItemRule() {
            this._builderRules.push(new ConjuredItemRule());
            return this;
        }

        public withBackstagePassesItemRule() {
            this._builderRules.push(new BackstagePassesItemRule());
            return this;
        }

        public build(): ItemQualityRuleEngine {
            this._builderRules.push(new NormalItemRule()); // every engine has a normal item rule

            return new ItemQualityRuleEngine(this._builderRules);
        }
    }
}
