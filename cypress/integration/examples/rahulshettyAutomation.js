describe('Automating Rahul shetty practise',()=>{
    it('Should do automation',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get ('input[type="checkbox"]').check(['option1','option2'])
       

        //static dropdown
        cy.get("#dropdown-class-example").select('option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('IND')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
        if($e1.text()=="India"){
             $e1.click()
        }    
        })

        //hiding element check
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')
    })
})