require('dotenv').config();

export class MainPage{
    constructor(page){
        this.page = page;
        this.nonCrashBugMessage = this.page.locator('.academy-popup-bug-title');
    };

    async openPage(){
        await this.page.goto(process.env.UI_TESTS_BASE_URL);
    }
}
