export class LoginPage{
    constructor(page){
        this.page=page;
        this.email = page.locator('input[type= "mail"]' );
        this.password = page.locator('input[type= "password"]');
        this.submit = page.locator('input[type="submit"]');
    }

    async  login(email,password){
         await this.email.fill(email);
         await this.password.fill(password);
         await this.submit.click();
    }

    

}