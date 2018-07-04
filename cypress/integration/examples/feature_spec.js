describe('Synthesiser', function() {
  beforeEach(() => {
    cy.visit('https://stranger-synths.herokuapp.com/', function() {
  });

  it('changes the waveType when pressing space bar', function() {
    .type('w')
    expect('#waveType').to.contain('sawtooth');
  });
});
