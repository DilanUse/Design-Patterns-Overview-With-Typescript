import {ItemProxy} from '../item-proxy';
import {finalMethod} from '../decorator/final-method.decorator';

export abstract class RuleBase {
    public abstract isMatch(item: ItemProxy): boolean;

    // template method
    @finalMethod
    public updateItem(item: ItemProxy): void {
        this.adjustQuality(item);
        this.adjustSellIn(item);

        if (item.sellIn < 0) {
            this.adjustQualityForNegativeSellIn(item);
        }
    }

    public abstract adjustQuality(item: ItemProxy): void;

    // this is virtual in c#
    public adjustSellIn(item: ItemProxy) {
        item.decrementSellIn();
    }

    public abstract adjustQualityForNegativeSellIn(item: ItemProxy): void;
}
