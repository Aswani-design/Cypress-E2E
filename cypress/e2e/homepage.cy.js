import { homePage } from "../Pages/Home.cy"
import tesaData from "../../cypress/fixtures/tesaData.json"
const reghomePage=new homePage();

describe('homePage',function(){

    before(() =>{
        cy.login(tesaData.login.username, tesaData.login.password1)
      
    });

    it('addtocart',()=>{

        reghomePage.searchInput(tesaData.product.productName)
        reghomePage.addtocart()
        reghomePage.verifySuccessMsg().should('contain',tesaData.message.SuccessMeaages).and('contain',tesaData.product.productName);


    })
})