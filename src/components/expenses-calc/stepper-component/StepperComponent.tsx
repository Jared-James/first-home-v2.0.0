import { useState, ReactNode, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../../redux/hooks'
import { getStepperCount } from '../../../redux/features/expenses-calc'

const steps = [
    'Income',
    'Housing Expenses',
    'Everday Expenses',
    'Regular Expenses',
    'Personal Expenses',
    'Savings',
]

const StepperComponent = () => {
    const dispatch = useAppDispatch()
    const [activeStep, setActiveStep] = useState(0)

    useEffect(() => {
        dispatch(getStepperCount(activeStep))
    }, [activeStep, dispatch])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {}
                    const labelProps: {
                        optional?: ReactNode
                    } = {}

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                >
                    {activeStep === steps.length - 1 ? 'Finished' : 'Next'}
                </Button>
            </Box>
        </Box>
    )
}

export default StepperComponent
