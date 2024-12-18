export class homePage{

    weblocators={

        search_input:'.form-control.input-lg',
        click_search:'.btn.btn-default.btn-lg',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',
        success_msg:'.alert'

    }

    searchInput(productName){
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }

    addtocart(){
        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySuccessMsg(){
        return cy.get(this.weblocators.success_msg)
    }


}