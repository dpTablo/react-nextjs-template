describe('dbnSfpExample Page Spec', () => {
    it('페이지 로딩 시 정상적인 데이터 로드', () => {
        cy.visit('http://localhost:3000/dbnSfpExample');
        cy.get('.requestButton').click();
        cy.get('[data-id="alt"]').contains('L');
    });
});
