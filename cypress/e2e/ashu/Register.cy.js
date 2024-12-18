///reference type='cypress'>
import { registeredPage } from "../../Pages/RegisterPage.cy"
import RegisterData from "../../fixtures/RegisterData.json"
const regisobj =new registeredPage()
describe('register page',() =>{

    it('register flow',()=>{

        regisobj.openURL()
        regisobj.enterFirstName(RegisterData.firstName)
        regisobj.enterLastName(RegisterData.lastName)
        regisobj.enterEmail(RegisterData.email)
        regisobj.enterTelephone(RegisterData.telePhone)
        regisobj.enterPassword(RegisterData.password)
        regisobj.selectCheckbox()
        regisobj.contiuneButton()

    })
})
