
describe("End to End Ecommerce Website", () => {

    before(function() {
        cy.fixture('example.json').then(function(data) {
            this.data = data;
        });
    });
    it("Submit order", function() {
        const productName="Nokia Edge";
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
        cy.get("#username").type(this.data.username);
        cy.get("#password").type(this.data.password);
        cy.get('input[value="admin"]').next('span.checkmark');
        cy.get('#login-form > div:nth-child(5) > select').select("teach");
        cy.get("#terms").click();
        cy.get("#signInBtn").click();
        cy.get(".card-img-top:visible").should("have.length","4");
        cy.get(".card-title a").each(($e1,index,$list)=>{
            const things=$e1.text()
            if(things.includes("Nokia")){
                cy.log("Got Nokia")
            }
        })
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length',1);
            cy.wrap($element).contains('button','Add').click();
        })
        cy.get('app-card').eq(0).contains('button','Add').click()
        let sum=0;
        cy.contains('a','Checkout').click()
        cy.get('tr td:nth-child(3) strong').each(($el)=>{
            const amount = Number($el.text().trim().split(" ")[1]);
            sum = sum+amount;
            cy.log(amount);
            cy.log(sum);
                }).then(() => {
                    expect(sum).to.be.greaterThan(20000);
                })
                cy.contains('button','Checkout').click();
                cy.get("input[type='submit']").click();
                cy.get(".alert strong").should('contain','Success')
    })
   
}) 