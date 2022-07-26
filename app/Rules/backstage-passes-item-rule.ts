import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class BackstagePassesItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Backstage passes to a TAFKAL80ETC concert';
    }

    public adjustQuality(item: ItemProxy): void {
        item.incrementQuality();

        if (item.sellIn < 11) {
            item.incrementQuality();
        }

        if (item.sellIn < 6) {
            item.incrementQuality();
        }
    }

    public adjustQualityForNegativeSellIn(item: ItemProxy): void {
        item.resetQuality();
    }
}
