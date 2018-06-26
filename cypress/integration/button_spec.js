import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Testing a button is clicked', function() {
  beforeEach(() => {
    cy.visit('./index.html')
  })
  it('Starts off as blue', function() {

    cy.get('#button1')
    .should('have.css', 'background-color')
    .and('be.colored', 'blue')
  })

  it ('Should change to red when clicked', function(){
    cy.get('#button1').click()
    .should('have.css', 'background-color')
    .and('be.colored', 'red')
  })
})
