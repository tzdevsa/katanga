'use client'

// import { createApplication } from '@/actions/createApplication'
import { Autocomplete, Box, Button, Checkbox, FormControlLabel, Grid2, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'

export function HorizontalLinearStepper() {
  const [steps, setSteps] = React.useState<{ label: string, content: React.JSX.Element}[]>([])
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [emergencyContactSameAddress, setEmergencyContactSameAddress] = React.useState(true)
  const [secondaryEmergencyContactSameAddress, setSecondaryEmergencyContactSameAddress] = React.useState(true)

  const [firstName, setFirstName] = React.useState<string | null>()
  const [middleName, setMiddleName] = React.useState<string | null>()
  const [lastName, setLastName] = React.useState<string | null>()
  const [dateOfBirth, setDateOfBirth] = React.useState<string | null>()
  const [gender, setGender] = React.useState<string | null>()
  const [phone1, setPhone1] = React.useState<string | null>()
  const [phone2, setPhone2] = React.useState<string | null>()
  const [email, setEmail] = React.useState<string | null>()
  const [addressLine1, setAddressLine1] = React.useState<string | null>()
  const [addressLine2, setAddressLine2] = React.useState<string | null>()
  const [city, setCity] = React.useState<string | null>()
  const [country, setCountry] = React.useState<string | null>()
  const [postalCode, setPostalCode] = React.useState<string | null>()
  const [province, setProvince] = React.useState<string | null>()
  const [previousSchool, setPreviousSchool] = React.useState<string | null>()
  const [enrollmentGradeId, setEnrollmentGradeId] = React.useState<string | null>()
  const [religion, setReligion] = React.useState<string | null>()
  const [emergencyFirstName, setEmergencyFirstName] = React.useState<string | null>()
  const [emergencyLastName, setEmergencyLastName] = React.useState<string | null>()
  const [emergencyPhone1, setEmergencyPhone1] = React.useState<string | null>()
  const [emergencyPhone2, setEmergencyPhone2] = React.useState<string | null>()
  const [emergencyEmail, setEmergencyEmail] = React.useState<string | null>()
  const [emergencyAddressLine1, setEmergencyAddressLine1] = React.useState<string | null>()
  const [emergencyAddressLine2, setEmergencyAddressLine2] = React.useState<string | null>()
  const [emergencyCity, setEmergencyCity] = React.useState<string | null>()
  const [emergencyCountry, setEmergencyCountry] = React.useState<string | null>()
  const [emergencyPostalCode, setEmergencyPostalCode] = React.useState<string | null>()
  const [emergencyProvince, setEmergencyProvince] = React.useState<string | null>()
  const [secondaryEmergencyFirstName, setSecondaryEmergencyFirstName] = React.useState<string | null>()
  const [secondaryEmergencyLastName, setSecondaryEmergencyLastName] = React.useState<string | null>()
  const [secondaryEmergencyPhone1, setSecondaryEmergencyPhone1] = React.useState<string | null>()
  const [secondaryEmergencyPhone2, setSecondaryEmergencyPhone2] = React.useState<string | null>()
  const [secondaryEmergencyEmail, setSecondaryEmergencyEmail] = React.useState<string | null>()
  const [secondaryEmergencyAddressLine1, setSecondaryEmergencyAddressLine1] = React.useState<string | null>()
  const [secondaryEmergencyAddressLine2, setSecondaryEmergencyAddressLine2] = React.useState<string | null>()
  const [secondaryEmergencyCity, setSecondaryEmergencyCity] = React.useState<string | null>()
  const [secondaryEmergencyCountry, setSecondaryEmergencyCountry] = React.useState<string | null>()
  const [secondaryEmergencyPostalCode, setSecondaryEmergencyPostalCode] = React.useState<string | null>()
  const [secondaryEmergencyProvince, setSecondaryEmergencyProvince] = React.useState<string | null>()

  const disableNext = useMemo(() => {
    switch (activeStep) {
      case 0:
        return !enrollmentGradeId
      case 1:
        return !firstName || !lastName || !dateOfBirth || !gender
      case 2:
        return !phone1 || !addressLine1 || !city || !country || !province
      case 3:
        return !emergencyFirstName || !emergencyLastName || !emergencyPhone1 || !emergencyAddressLine1 || !emergencyCity || !emergencyCountry || !emergencyProvince
      case 4:
        return !secondaryEmergencyFirstName || !secondaryEmergencyLastName || !secondaryEmergencyPhone1 || !secondaryEmergencyAddressLine1 || !secondaryEmergencyCity || !secondaryEmergencyCountry || !secondaryEmergencyProvince
      default:
        return false;
    }
  }, [activeStep, addressLine1, city, country, dateOfBirth, emergencyAddressLine1, emergencyCity, emergencyCountry, emergencyFirstName, emergencyLastName, emergencyPhone1, emergencyProvince, enrollmentGradeId, firstName, gender, lastName, phone1, province, secondaryEmergencyAddressLine1, secondaryEmergencyCity, secondaryEmergencyCountry, secondaryEmergencyFirstName, secondaryEmergencyLastName, secondaryEmergencyPhone1, secondaryEmergencyProvince])

  const isStepOptional = (step: number) => {
    return step === 3 || step === 4;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    setSteps([
    {
      label: 'Registration Information',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Autocomplete
              options={['One', 'Two', 'Three']}
              fullWidth
              size="small"
              renderInput={(params) => <TextField {...params} label="Grade" type="text" name="enrollmentGrade" required />}
              onChange={(e, value) => setEnrollmentGradeId(value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type="text"
              name="religion"
              label="Religion"
              onChange={(e) => setReligion(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="previousSchool"
              label="Previous School"
              onChange={(e) => setPreviousSchool(e.target.value)}
            />
            </Grid2>
        </Grid2>
      )
    },
    {
      label: 'Student Details',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="firstName"
              label="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="middleName"
              label="Middle Name"
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="lastName"
              label="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type="date"
              name='dateOfBirth'
              required
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <Autocomplete
              options={['MALE', 'FEMALE']}
              fullWidth
              size="small"
              renderInput={(params) => <TextField {...params} label="Gender" type="text" name="gender" required />}
              onChange={(e, value) => { if (value) setGender(value) }}
            />
          </Grid2>
        </Grid2>
      )
    },
    {
      label: 'Contact & Address',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="phone1"
              label="Phone 1"
              required
              onChange={(e) => setPhone1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="phone2"
              label="Phone 2"
              onChange={(e) => setPhone2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="email"
              name="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="addressLine1"
              label="Address Line 1"
              required
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="addressLine2"
              label="Address Line 2"
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="country"
              label="Country"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="city"
              label="City"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="postalCode"
              label="Postal Code"
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="province"
              label="Province"
              required
              onChange={(e) => setProvince(e.target.value)}
            />
          </Grid2>
        </Grid2>
      )
    },
    {
      label: 'Emergency Contact',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyFirstName"
              label="First Name"
              required
              onChange={(e) => setEmergencyFirstName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyLastName"
              label="Last Name"
              required
              onChange={(e) => setEmergencyLastName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="emergencyPhone1"
              label="Phone 1"
              required
              onChange={(e) => setEmergencyPhone1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="emergencyPhone2"
              label="Phone 2"
              onChange={(e) => setEmergencyPhone2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="email"
              name="emergencyEmail"
              label="Email"
              onChange={(e) => setEmergencyEmail(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormControlLabel control={<Checkbox checked={emergencyContactSameAddress} onChange={(_, value) => setEmergencyContactSameAddress(value)} />} label="Same address as student" />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyAddressLine1"
              label="Address Line 1"
              required
              defaultValue={emergencyContactSameAddress ? addressLine1 : ''}
              onChange={(e) => setEmergencyAddressLine1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyAddressLine2"
              label="Address Line 2"
              defaultValue={emergencyContactSameAddress ? addressLine2 : ''}
              onChange={(e) => setEmergencyAddressLine2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyCountry"
              label="Country"
              required
              defaultValue={emergencyContactSameAddress ? country : ''}
              onChange={(e) => setEmergencyCountry(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyCity"
              label="City"
              required
              defaultValue={emergencyContactSameAddress ? city : ''}
              onChange={(e) => setEmergencyCity(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyPostalCode"
              label="Postal Code"
              defaultValue={emergencyContactSameAddress ? postalCode : ''}
              onChange={(e) => setEmergencyPostalCode(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="emergencyProvince"
              label="Province"
              required
              defaultValue={emergencyContactSameAddress ? province : ''}
              onChange={(e) => setEmergencyProvince(e.target.value)}
            />
          </Grid2>
        </Grid2>
      )
    },
    {
      label: 'Secondary Emergency Contact',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyFirstName"
              label="First Name"
              required
              onChange={(e) => setSecondaryEmergencyFirstName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyLastName"
              label="Last Name"
              required
              onChange={(e) => setSecondaryEmergencyLastName(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="secondaryEmergencyPhone1"
              label="Phone 1"
              required
              onChange={(e) => setSecondaryEmergencyPhone1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="secondaryEmergencyPhone2"
              label="Phone 2"
              onChange={(e) => setSecondaryEmergencyPhone2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={4}>
            <TextField
              fullWidth
              size="small"
              type="email"
              name="secondaryEmergencyEmail"
              label="Email"
              onChange={(e) => setSecondaryEmergencyEmail(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <FormControlLabel control={<Checkbox checked={secondaryEmergencyContactSameAddress} onChange={(_, value) => setSecondaryEmergencyContactSameAddress(value)} />} label="Same address as student" />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyAddressLine1"
              label="Address Line 1"
              required
              defaultValue={secondaryEmergencyContactSameAddress ? addressLine1 : ''}
              onChange={(e) => setSecondaryEmergencyAddressLine1(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyAddressLine2"
              label="Address Line 2"
              defaultValue={secondaryEmergencyContactSameAddress ? addressLine2 : ''}
              onChange={(e) => setSecondaryEmergencyAddressLine2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyCountry"
              label="Country"
              required
              defaultValue={secondaryEmergencyContactSameAddress ? country : ''}
              onChange={(e) => setSecondaryEmergencyCountry(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyCity"
              label="City"
              required
              defaultValue={secondaryEmergencyContactSameAddress ? city : ''}
              onChange={(e) => setSecondaryEmergencyCity(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyPostalCode"
              label="Postal Code"
              defaultValue={secondaryEmergencyContactSameAddress ? postalCode : ''}
              onChange={(e) => setSecondaryEmergencyPostalCode(e.target.value)}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="secondaryEmergencyProvince"
              label="Province"
              required
              defaultValue={secondaryEmergencyContactSameAddress ? province : ''}
              onChange={(e) => setSecondaryEmergencyProvince(e.target.value)}
            />
          </Grid2>
        </Grid2>
      )
    },
    {
      label: 'Review and Submit',
      content: (
        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Typography variant="h6">Student Details</Typography>
            <Typography variant="body1">{firstName} {middleName} {lastName}</Typography>
            <Typography variant="body1">{dateOfBirth}</Typography>
            <Typography variant="body1">{gender}</Typography>
            <Typography variant="body1">{phone1} {phone2}</Typography>
            <Typography variant="body1">{email}</Typography>
            <Typography variant="body1">{addressLine1} {addressLine2}</Typography>
            <Typography variant="body1">{city} {country} {postalCode} {province}</Typography>
            <Typography variant="body1">{previousSchool}</Typography>
            <Typography variant="body1">{enrollmentGradeId}</Typography>
            <Typography variant="body1">{religion}</Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="h6">Emergency Contact</Typography>
            <Typography variant="body1">{emergencyFirstName} {emergencyLastName}</Typography>
            <Typography variant="body1">{emergencyPhone1} {emergencyPhone2}</Typography>
            <Typography variant="body1">{emergencyEmail}</Typography>
            <Typography variant="body1">{emergencyAddressLine1} {emergencyAddressLine2}</Typography>
            <Typography variant="body1">{emergencyCity} {emergencyCountry} {emergencyPostalCode} {emergencyProvince}</Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="h6">Secondary Emergency Contact</Typography>
            <Typography variant="body1">{secondaryEmergencyFirstName} {secondaryEmergencyLastName}</Typography>
            <Typography variant="body1">{secondaryEmergencyPhone1} {secondaryEmergencyPhone2}</Typography>
            <Typography variant="body1">{secondaryEmergencyEmail}</Typography>
            <Typography variant="body1">{secondaryEmergencyAddressLine1} {secondaryEmergencyAddressLine2}</Typography>
            <Typography variant="body1">{secondaryEmergencyCity} {secondaryEmergencyCountry} {secondaryEmergencyPostalCode} {secondaryEmergencyProvince}</Typography>
          </Grid2>
        </Grid2>
      )
    }
  ])
}, []);

  return (
    <Box sx={{ width: '100%', minHeight: '60vh' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} variant="outlined">Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep < steps.length - 1 && (
            <Typography variant="caption" color="textSecondary">Enter all fields marked with *</Typography>
          )}
          <Box sx={{ mt: 2, mb: 1 }}>{steps[activeStep].content}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }} variant="outlined">
                Skip
              </Button>
            )}
            <Button onClick={handleNext} variant="outlined" disabled={disableNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default function StudentApplication({ organizationId }: { organizationId: string }) {
  console.log(organizationId)
  return (
    <>
      <HorizontalLinearStepper />
    </>
  )
}
