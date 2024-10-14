// describe('Drag and Drop Sliders', () => {
//     it('should drag and drop the slider to a specific value', () => {
//       // Visit the page with the sliders
//       cy.visit('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo');
   
//       // Select the slider element
//       cy.get('.sp__range-success > .sp__range').then($slider => {
//         const width = $slider.width();
//         const targetValue = 95; // Target value you want to set the slider to
//         const targetPosition = (targetValue / 100) * width;
   
//         // Drag the slider to the target position
//         cy.wrap($slider)
//           .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
//           .trigger('mousemove', { which: 1, pageX: targetPosition, pageY: 0 })
//           .trigger('mouseup');
//       });
   
//       // Verify the slider value
//       cy.get('.sp__range-success > .sp__range').should('have.text', '95');
//     });
//   });