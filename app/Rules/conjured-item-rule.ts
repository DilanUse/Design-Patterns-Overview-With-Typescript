import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class ConjuredItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Conjured Mana Cake';
    }

    public adjustQuality(item: ItemProxy): void {
        item.decrementQuality();
        item.decrementQuality();
    }

    public adjustQualityForNegativeSellIn(item: ItemProxy): void {
        item.decrementQuality();
        item.decrementQuality();
    }
}
