require('dotenv').config();

export class MainPage{
    constructor(page){
        this.page = page;
        this.bugMessage = this.page.getByRole('heading', { name: 'You found a crash bug' })
        this.alternativeBugMessage = this.page
            .getByRole('heading', { name: 'You found a crash bug, examine the page for 5 seconds' })
            .first();    }

    async openPage(){
        await this.page.goto(process.env.UI_TESTS_BASE_URL);
    }
}
