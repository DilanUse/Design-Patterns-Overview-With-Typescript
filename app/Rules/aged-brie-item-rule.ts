import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class AgedBrieItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Aged Brie';
    }

    public adjustQuality(item: ItemProxy): void {
        item.incrementQuality();
    }

    public adjustQualityForNegativeSellIn(item: ItemProxy): void {
        item.incrementQuality();
    }
}
