describe('Automating Rahul shetty practise',()=>{
    it('Should do automation',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //     // checkbox
    //     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    //     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    //     cy.get ('input[type="checkbox"]').check(['option1','option2'])
       

    //     //static dropdown
    //     cy.get("#dropdown-class-example").select('option2')

    //     //dynamic dropdown
    //     cy.get('#autocomplete').type('IND')
    //     cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
    //     if($e1.text()=="India"){
    //          $e1.click()
    //     }    
    //     })

    //     //hiding element check
    //    cy.get('#displayed-text').should('be.visible')
    //    cy.get('#hide-textbox').click()
    //    cy.get('#displayed-text').should('not.be.visible')
    //    cy.get('#show-textbox').click()
    //    cy.get('#displayed-text').should('be.visible')



    //alerts
    // cy.get('#alertbtn').click;
    // cy.on('window:alert', (str) => {
    //     expect(str).to.equal('Hello, share this practice page and share your knowledge');
    // });


    //Cypress doesn't support handling multiple tabs so we are just open new tab within that tab
   cy.get('#opentab').invoke('removeAttr','target').click()
   cy.origin("https://www.qaclickacademy.com", () => {
    cy.get("#navbarSupportedContent ul li a[href='about.html']").click();
    cy.get(".mt-50 h2").should('contain',"Welcome to QA"); 
    cy.get(".mt-50 h2").contains("Welcome to QA");  // this is will check if whole sentence has his text
    cy.get(".mt-50 h2").should('have.text','Welcom to'); // this will fail because .should(have.text) check if the exact sentence is there 
    //or not
  })


//this method is use to check the table 
//    cy.get("tr td:nth-child(2)").each(($e1, index, $list)=>{
//     const courseName=$e1.text()
//     if(courseName.includes("Python")){
//         cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
//           const priceCourse =   price.text()
//           expect(priceCourse).to.equal('25')
//         })

//     }
//    })


//this method is used to mouse hover and then click on hidden element
    // cy.get(".mouse-hover-content").invoke("show")
    // cy.contains('Top').click();
    // cy.url().should('include','top')

    // this method is used to click on hidden element in the cypresss
//  cy.get("a[href='#top']").click({force:true})
//   cy.url().should('include','top')



//this method is use to visit second window
// cy.get('#opentab').then((e1)=>{
//     const url = e1.prop('href')
//     cy.visit(url)
//     cy.origin(url,()=>{
//         cy.get("#navbarSupportedContent ul li a[href='about.html']").click();
//         cy.get(".mt-50 h2").should('contain','Welcome to QA')
//     })
// })


    })
})