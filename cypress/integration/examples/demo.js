import 'cypress-iframe'


describe('Frames Test',()=>{
    it('Demo test for I fra method', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        cy.iframe().find("h1[class*='pricing-title']").should('include','Platinum')
    })
})