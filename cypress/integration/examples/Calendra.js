// describe("calendar automation",()=>{
//     it("verify the date selection",()=>{
//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
//         const year = "2027"
//         const month = "February"
//         const date ='13'
//         cy.get(".react-date-picker__inputGroup").click()
//        cy.get(".react-calendar__navigation__label__labelText").click()
//        cy.get(".react-calendar__navigation__label__labelText").click()
//         cy.contains("button",year).click()
//         cy.contains(".react-calendar__tile abbr",month).click()
//         cy.contains(".react-calendar__tile abbr",date).click()
//         cy.get("input[name='month']").should("have.value","2")
//         cy.get("input[name='day']").should("have.value",date)
//         cy.get("input[name='year']").should("have.value",year)
//     })
// })

describe('Calendar test',()=>
    {
     
        it('Verify date selection',()=>{
     
            const monthNumber = "6";
            const date = "15";
            const year = "2027";
            const expectedList = [monthNumber,date,year];
     
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
            cy.wait(5000)
            cy.get(".react-date-picker__inputGroup").click(); 
     
            cy.get(".react-calendar__navigation__label").click();
            cy.get(".react-calendar__navigation__label").click();
            cy.contains("button",year).click();
            cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
            cy.contains("abbr",date).click();
     
            //Assertion
            cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
            {
                cy.wrap($el).invoke('val').should('eq',expectedList[index]);
            }            
            )     
        })
 
    })