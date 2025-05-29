describe('Ингредиент — модальное окно', () => {
  beforeEach(() => {
    cy.fixture('ingredients').as('ingredients');
    cy.fixture('ingredients').then((data) => {
    cy.intercept('GET', '**/api/ingredients', {
        statusCode: 200,
        body: {
        success: true,
        data: data.ingredient
        }
    }).as('loadIngredients');
    });
    cy.visit('/');
    cy.wait('@loadIngredients');
  });

  it('открывает и отображает модалку с деталями', function () {
    const ingredient = this.ingredients.ingredient[0];

    cy.contains(ingredient.name).click();
    cy.get('[data-testid="modal-content"]').should('contain.text', ingredient.name);
    cy.get('[data-testid="modal-content"] img').should('have.attr', 'src', ingredient.image_large);
  });

  it('закрывается по клику на крестик', function () {
    cy.contains(this.ingredients.ingredient[0].name).click();
    cy.get('[data-testid="modal-close"]').click();
    cy.get('[data-testid="modal-content"]').should('not.exist');
  });

  it('закрывается по клику на оверлей', function () {
    cy.contains(this.ingredients.ingredient[0].name).click();
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal-content"]').should('not.exist');
  });
});
