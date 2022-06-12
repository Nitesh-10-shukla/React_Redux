import axios from 'axios';
import { API_URL } from 'redux/constants/basics';
describe('Signup', () => { 
    test('userSignup', async() => { 
      
        const signupUser = await axios.post(`${API_URL}/api/validate-password/`,{
            mobile_phone:"+19999999999",
            password: "Precina123",
          })
         
          expect(signupUser.status).toBe(200)

     })
 test('validation',()=>{
         var number = 5655567778
         var reg=/\-?\d*\.?\d{1,2}/;
         const password ="45888"
         const reducer = () => {
            if (number.length < 10 || number.length>10 || !(reg.test(number))) {
                  return 'Invalid Number';
                }
               else if (password.length < 5) {
                return 'Invalid Password';
              }
              else{
                  return "success"
              }
              }
          expect(reducer()).toBe('success' )
         

     })
 })

describe('Login', () => { 
    test('LoginOtp', async() => { 
        const Loginwithotp = await axios.post(`${API_URL}/api/auth-by-sms/`,{
            mobile_phone:"+19999999999",
            sms_code: "123456",
          })
          expect(Loginwithotp.status).toBe(200)
     })
 })
  