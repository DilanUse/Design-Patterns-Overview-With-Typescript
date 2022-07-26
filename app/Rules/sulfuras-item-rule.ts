import {RuleBase} from './rule-base';
import {ItemProxy} from '../item-proxy';

export class SulfurasItemRule extends RuleBase {
    public override isMatch(item: ItemProxy): boolean {
        return item.name == 'Sulfuras, Hand of Ragnaros';
    }

    public override updateItem(item: ItemProxy) {
        // do nothing
    }
}
