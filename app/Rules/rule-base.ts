import {ItemProxy} from '../item-proxy';

export abstract class RuleBase {
    public abstract isMatch(item: ItemProxy): boolean;
    public abstract updateItem(item: ItemProxy): void;
}
