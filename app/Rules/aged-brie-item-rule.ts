import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class AgedBrieItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Aged Brie';
    }

    public override updateItem(item: ItemProxy) {
        item.incrementQuality();
        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.incrementQuality();
        }
    }
}
