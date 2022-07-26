import {ItemProxy} from '../item-proxy';
import {RuleBase} from './rule-base';

export class NormalItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        // default rule
        return true;
    }

    public override updateItem(item: ItemProxy): void {
        item.decrementQuality();
        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.decrementQuality();
        }
    }
}
