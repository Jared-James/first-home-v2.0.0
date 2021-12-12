import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Tooltip from '@material-ui/core/Tooltip'
import styles from './inputMui.module.scss'

interface MuiInput {
    onChange: any
    value: number
    name: string
    currencySymbol?: string
    minimumValue?: number
    decimalPlacesShownOnFocus?: number
    decimalPlacesShownOnBlur?: number
    decimalPlaces?: number
    maximumValue?: number
    isMobile?: boolean
    label?: string
}

const InputMui = ({
    onChange,
    value,
    name,
    currencySymbol,
    minimumValue,
    decimalPlacesShownOnFocus,
    decimalPlacesShownOnBlur,
    decimalPlaces,
    maximumValue,
    isMobile,
    label,
}: MuiInput) => {
    return (
        <div className={styles.container}>
            <CurrencyTextField
                onChange={onChange}
                label={label || ''}
                value={value || 0}
                name={name || ''}
                currencySymbol={currencySymbol}
                digitGroupSeparator=","
                autoComplete="off"
                minimumValue={minimumValue || '0'}
                maximumValue={maximumValue}
                decimalPlacesShownOnFocus={decimalPlacesShownOnFocus || 0}
                decimalPlacesShownOnBlur={decimalPlacesShownOnBlur || 0}
                decimalPlaces={decimalPlaces || 2}
                inputProps={{ inputMode: 'numeric' }}
                style={{
                    width: isMobile ? '100%' : '90%',
                    margin: '10px 0',
                }}
                className={styles.textField}
            />

            <Tooltip title="huh">
                <HelpOutlineIcon
                    style={{
                        fontSize: '24px',
                        paddingLeft: '0.4rem',
                    }}
                />
            </Tooltip>
        </div>
    )
}

export default InputMui
