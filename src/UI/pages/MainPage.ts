import {Page} from "@playwright/test"
import { BasePage } from "./BasePage";
import {DropdownMenuComponent} from '../components/DropdownMenuComponent'

export class MainPage extends BasePage{
    
    readonly dropdownMenyComponent: DropdownMenuComponent;

    constructor(page: Page) {
        super(page)
        this.dropdownMenyComponent = new DropdownMenuComponent(page);
    }


    async goto(): Promise<void> {
        await this.page.goto('/')
    }
}