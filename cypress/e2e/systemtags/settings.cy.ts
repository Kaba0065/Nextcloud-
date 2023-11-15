import { User } from '@nextcloud/cypress'

const admin = new User('admin', 'admin')

describe('System Tags: Admin settings', { testIsolation: true }, () => {
	beforeEach(() => {
		// TODO: clean state - remove all tags
		cy.login(admin)
		cy.visit('/settings/admin')
		const url = new URL('/remote.php/dav/systemtags/', Cypress.config('baseUrl'))
		cy.intercept(url.href).as('getTags')
	})

	it('Can create a tag', () => {
		const tag = `${Date.now() * Math.random()}`
		cy.get('[data-cy-systemtags-section]').within(() => {
			cy.get('h2').should('contain.text', 'Collaborative tags').scrollIntoView()

			// create button exists but is disabled
			cy.contains('button', 'Create').should('exist').and('be.disabled')
			// Input tag
			cy.get('[data-cy-systemtags-name]').type(tag)
			cy.contains('button', 'Create').should('not.be.disabled').click({ force: true })
		})
		// See success
		cy.get('.toast-success').should(($el) => expect($el.text()).match(/Tag [^ ]+ created/))
		// See tag in list
		cy.get('[data-cy-systemtags-select] input').type(tag)
		cy.get('ul').contains(tag)

		// survives after reload
		cy.reload().wait('@getTags')
		cy.get('[data-cy-systemtags-section]').scrollIntoView()
		// get tag
		cy.get('[data-cy-systemtags-select] input').type(`{selectAll}${tag}`)
		cy.get('ul').contains(tag)
	})

	it('Edit a tag', () => {
		const tag = `${Date.now() * Math.random()}`
		createRandomTag().then((oldName) => {
			cy.get('[data-cy-systemtags-section]').scrollIntoView()
			// get old tag
			cy.get('[data-cy-systemtags-select] input').type(oldName)
			cy.get('ul').contains(oldName).click({ force: true })
			// Input should be the tag name
			cy.get('[data-cy-systemtags-name]').should('have.value', oldName)
			// type new name
			cy.get('[data-cy-systemtags-name]').type(`{selectAll}${tag}`)
			cy.contains('button', 'Update').click()
			// See success
			cy.get('.toast-success').should(($el) => expect($el.text()).match(/Tag renamed/))
			// See tag in list
			cy.get('[data-cy-systemtags-select]').type(`{selectAll}${tag}`)
			cy.get('ul').contains(tag)

			// survives after reload
			cy.reload().wait('@getTags')
			cy.get('[data-cy-systemtags-section]').scrollIntoView()
			// get tag
			cy.get('[data-cy-systemtags-select] input').type(tag)
			cy.get('ul').contains(tag)
		})
	})

	it('Reset a tag', () => {
		createRandomTag().then((oldName) => {
			cy.get('[data-cy-systemtags-section]').scrollIntoView()
			// get old tag
			cy.get('[data-cy-systemtags-select] input').type(oldName)
			cy.get('ul').contains(oldName).click({ force: true })
			// Input should be the tag name
			cy.get('[data-cy-systemtags-name]').should('have.value', oldName)
			// type new name
			cy.get('[data-cy-systemtags-name]').type('{selectAll}newName')
			cy.get('[data-cy-systemtags-name]').should('have.value', 'newName')
			cy.contains('button', 'Reset').click()
			// See it is reset
			cy.get('[data-cy-systemtags-name]').should('have.value', oldName)
		})
	})

	it('Delete a tag', () => {
		createRandomTag().then((oldName) => {
			cy.get('[data-cy-systemtags-section]').scrollIntoView()
			// get old tag
			cy.get('[data-cy-systemtags-select] input').type(oldName)
			cy.get('ul').contains(oldName).click({ force: true })
			// Input should be the tag name
			cy.get('[data-cy-systemtags-name]').should('have.value', oldName)
			cy.contains('button', 'Delete').click()
			// See success
			cy.get('.toast-success').should(($el) => expect($el.text()).match(/Tag [^ ]+ deleted/))
			// See tag is no longer in list
			cy.get('[data-cy-systemtags-select]').type(`{selectAll}${oldName}`)
			cy.get('ul').contains(oldName).should('not.exist')

			// survives after reload
			cy.reload().wait('@getTags')
			cy.get('[data-cy-systemtags-section]').scrollIntoView()
			// get tag
			cy.get('[data-cy-systemtags-select] input').type(oldName)
			cy.get('ul').contains(oldName).should('not.exist')
			cy.get('ul').contains('No results').should('exist')
		})
	})
})

// TODO: This should be some kind of non failing occ api call
const createRandomTag = () => {
	const tag = `${Date.now() * Math.random()}`
	cy.get('[data-cy-systemtags-section]').within(() => {
		cy.get('h2').should('contain.text', 'Collaborative tags').scrollIntoView()

		// create button exists but is disabled
		cy.contains('button', 'Create').should('exist').and('be.disabled')
		// Input tag
		cy.get('[data-cy-systemtags-name]').type(tag)
		cy.contains('button', 'Create').should('not.be.disabled').click({ force: true })
	})
	return cy.then(() => tag)
}
