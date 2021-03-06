import { useState, ReactNode, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../../redux/hooks'
import { getStepperCount } from '../../../redux/features/expenses-calc'

function getSteps() {
    return ['Income', 'Housing ', 'Everday ', 'Regular ', 'Personal', 'Savings']
}

function getStepsDesktop() {
    return [
        'Income',
        'Housing Expenses',
        'Everday Expenses',
        'Regular Expenses',
        'Personal Expenses',
        'Savings',
    ]
}

let steps: string[]

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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1400px)',
    })

    if (!isDesktopOrLaptop) {
        steps = getSteps()
    }
    if (isDesktopOrLaptop) {
        steps = getStepsDesktop()
    }

    return (
        <Box sx={{ width: '100%', marginBottom: '50px' }}>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                style={{ padding: '0' }}
            >
                {steps?.map((label: string) => {
                    const stepProps: { completed?: boolean } = {}
                    const labelProps: {
                        optional?: ReactNode
                    } = {}

                    return (
                        <Step
                            key={label}
                            {...stepProps}
                            style={{ width: '200px', padding: '0' }}
                        >
                            <StepLabel {...labelProps}>
                                <p style={{ fontSize: '12px' }}>{label}</p>
                            </StepLabel>
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
