
describe("Automating para bank", ()=>{
    it("login", ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('input[name="username"]').type("tom");
        cy.get('input[name="password"]').type('Password123');
        cy.contains('Register').click()
        cy.get("input[id='customer.firstName']").type("Rohit")
        cy.get("input[id='customer.lastName']").type("Mane")
        cy.get("input[id='customer.address.street']").type("1 Main street")
        cy.get("input[id='customer.address.city']").type("Mumbai")
        cy.get("input[id='customer.address.zipCode']").type("413002")
        cy.get("input[id='customer.phoneNumber']").type("75453477454354")
        cy.get("input[id='customer.ssn']").type("Godkiller")
        cy.get("input[id='customer.address.street']").type("1 Main street")
        cy.get("input[id='customer.username']").type("Godkiller98")
        cy.get("input[id='customer.password']").type("Godkiller@9890")
        cy.get("input[id='repeatedPassword']").type("Godkiller@9890")
    })
})