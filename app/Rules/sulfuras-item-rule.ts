import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class SulfurasItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Sulfuras, Hand of Ragnaros';
    }

    public adjustQuality(item: ItemProxy): void {
        // do nothing
    }

    public adjustQualityForNegativeSellIn(item: ItemProxy): void {
        // do nothing
    }

    public override adjustSellIn(item: ItemProxy) {
        // do nothing
    }
}
