export class registeredPage{


    weblocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telePhone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckBox:'input[type="checkbox"]',
        continue:'.btn.btn-primary'
    }
   
    openURL(){
        //cy.log(regisobj);
        cy.visit(Cypress.env('URL'))
    }


    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(Lname){
        cy.get(this.weblocators.lastName).type(Lname)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phoneNo){
        cy.get(this.weblocators.telePhone).type(phoneNo)
    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    selectCheckbox(){
        cy.get(this.weblocators.policyCheckBox).check()
    }

    contiuneButton(){
        cy.get(this.weblocators.continue).click()
    }
}