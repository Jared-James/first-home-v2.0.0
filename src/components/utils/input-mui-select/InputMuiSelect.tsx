import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Tooltip from '@material-ui/core/Tooltip'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import styles from './inputMuiSelect.module.scss'
import { WEEKLY, FORTNIGHTLY, MONTHLY } from '../../../constants/time'

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
    timeFrameValue?: any
    handleTimeFrame?: any
}

const tooltipStyles = {
    transform: `translateY(-5px)`,
    fontSize: `18px`,
    margin: `5px`,
}

const InputMuiSelect = ({
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
    handleTimeFrame,
    timeFrameValue,
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
            <Select
                value={timeFrameValue}
                name={name}
                onChange={handleTimeFrame}
                style={{
                    marginLeft: '0.7rem',
                    marginRight: '0.5rem',
                    minWidth: '125.06px',
                    fontSize: '18px',
                    transform: 'translateY(35px)',
                    height: '25%',
                }}
                variant="standard"
                MenuProps={{
                    disableScrollLock: true,
                }}
            >
                <MenuItem value={WEEKLY}>weekly</MenuItem>
                <MenuItem value={FORTNIGHTLY}>fortnightly</MenuItem>
                <MenuItem value={MONTHLY}>monthly</MenuItem>
            </Select>

            {/* <span className={styles.tooltip}>
                <Tooltip
                    title="This will be the tool tip"
                    style={tooltipStyles}
                >
                    <HelpOutlineIcon />
                </Tooltip>
            </span> */}
        </div>
    )
}

export default InputMuiSelect
