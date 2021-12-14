import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Tooltip from '@material-ui/core/Tooltip'
import styles from './inputMui.module.scss'

interface MuiInput {
    onChange: any
    name: string
    currencySymbol?: string
    decimalPlacesShownOnFocus?: number
    decimalPlacesShownOnBlur?: number
    decimalPlaces?: number
    isMobile?: boolean
    label?: string
    decimalCharacter?: string
    placeholder?: string
    value?: any
}

const tooltipStyles = {
    transform: `translateY(-5px)`,
    fontSize: `18px`,
    margin: `5px`,
}

const InputMui = ({
    onChange,
    name,
    currencySymbol,
    decimalPlacesShownOnFocus,
    decimalPlacesShownOnBlur,
    decimalPlaces,
    isMobile,
    label,
    decimalCharacter,
    placeholder,
    value,
}: MuiInput) => {
    return (
        <div className={styles.container}>
            <CurrencyTextField
                onChange={onChange}
                label={label || 0}
                placeholder={placeholder || '0'}
                decimalCharacter={decimalCharacter || '.'}
                name={name || ''}
                currencySymbol={currencySymbol || '$'}
                digitGroupSeparator=","
                autoComplete="off"
                decimalPlacesShownOnFocus={decimalPlacesShownOnFocus || 0}
                decimalPlacesShownOnBlur={decimalPlacesShownOnBlur || 0}
                decimalPlaces={decimalPlaces || 2}
                inputProps={{ inputMode: 'numeric' }}
                value={value}
                style={{
                    width: isMobile ? '100%' : '90%',
                    margin: '10px 0',
                }}
                className={styles.textField}
            />

            <Tooltip title="This will be the tool tip" style={tooltipStyles}>
                <HelpOutlineIcon />
            </Tooltip>
        </div>
    )
}

export default InputMui
