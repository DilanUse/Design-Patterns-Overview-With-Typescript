import {ItemProxy} from '../item-proxy';
import {RuleBase} from './rule-base';

export class NormalItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        // default rule
        return true;
    }

    public adjustQuality(item: ItemProxy): void {
        item.decrementQuality();
    }

    public adjustQualityForNegativeSellIn(item: ItemProxy): void {
        item.decrementQuality();
    }
}
