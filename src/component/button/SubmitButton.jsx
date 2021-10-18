import React from 'react'

const SubmitButton = (props) => {
    const{checkTerms} = props;
    return (
        <div className='signUpFormDiv__form__SubmitButtonDiv'>
            <button disabled={checkTerms} type='submit'>SIGN UP</button>
        </div>
    )
}

export default SubmitButton
