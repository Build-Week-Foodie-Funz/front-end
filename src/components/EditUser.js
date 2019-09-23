/*
 * React I & II code.
 * Feel free to get a head start on building the skeleton of this component.
 * Leave the styling off for later, instead try focusing on functionality first!
 *
 * Features:
 *  - Navigation component
 *  - Used for creation or editing of the individual people/users
 *  - Name of a person, their image
 * 
 * 
 */
import React from 'react';
import Formik, {withFormik, Field, Form} from 'formik';
import styled from 'styled-components';

const UserContainer = styled.div`
    background-color: #FBFCEE;
    width: 100%;
`;

const UserInput = styled.div`
    padding-left: 10px;
    color: red;
    // height: 50px;
`;

const InputContainer = styled.div`
    background-color: #FBFCEE;
`;

const StyledField = styled.input`
    color: gray;
    margin: 20px;
    padding: 5px;
    padding-left: 15px;
    width: 200px;
    height: 2vh;
    font-size: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: 0 auto;
`;

const EditUser = props => {
    return (
        <UserContainer>
            UPDATE PROFILE:
            <p> '' Please only change the field that you want updated, leave the rest empty.</p>
            <Form>
                <InputContainer>
                    <UserInput>
                        <StyledField type='text' name='nickname' placeholder='Nickname'/>
                    </UserInput>
                    <UserInput>
                        <StyledField type='email' name='email' placeholder='Email'/>
                    </UserInput>
                    <UserInput>
                        <StyledField type='password' name='password' placeholder='Password'/>
                    </UserInput>
                    <UserInput>
                        <StyledField type='location' name='area' placeholder='Location'/>
                    </UserInput>
                </InputContainer>
                <ButtonContainer>
                    <button>Update Profile</button>
                    <button>Reset changes</button>
                </ButtonContainer>
            </Form>
        </UserContainer>
        )
    };
    
const FormikEditUser = withFormik({
    mapPropsToValue({nickname, email, password, location, area}){
        return {
            nickname: nickname || '',
            email: email || '',
            location: location || '',
            password: password || '',
            area: area || ''
        }
    }
})(EditUser);

export default FormikEditUser;