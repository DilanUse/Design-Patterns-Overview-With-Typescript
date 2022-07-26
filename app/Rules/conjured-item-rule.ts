import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class ConjuredItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Conjured Mana Cake';
    }

    public override updateItem(item: ItemProxy): void {
        item.decrementQuality();
        item.decrementQuality();

        item.decrementSellIn();

        if (item.sellIn < 0) {
            item.decrementQuality();
            item.decrementQuality();
        }
    }
}
