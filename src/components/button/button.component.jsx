/*
defau;t

inverted

google sign -in
*/
import {InvertedButton, BaseButton, GoogleSignInButton} from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
    base : 'base',
    google: 'google-sign-in',
    inverted:'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base)=>({
    [BUTTON_TYPE_CLASSES.base]:BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]:InvertedButton
}[buttonType]
)
const Button = ({children ,buttontype , ...otherProps})=>{
    const CustomButton = getButton(buttontype);
    return(
        <CustomButton {...otherProps}>
          {children}
        </CustomButton>
    )

}

export default Button;