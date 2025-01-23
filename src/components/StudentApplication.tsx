'use client'

import { createApplication } from '@/apollo/mutation'
import { Autocomplete, Button, CircularProgress, Grid2, TextField } from '@mui/material'
import React, { FormEvent } from 'react'

export default function StudentApplication({ organizationId }: { organizationId: string }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const [firstName, setFirstName] = React.useState('')
  const [middleName, setMiddleName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [dateOfBirth, setDateOfBirth] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [phone1, setPhone1] = React.useState('')
  const [phone2, setPhone2] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [addressLine1, setAddressLine1] = React.useState('')
  const [addressLine2, setAddressLine2] = React.useState('')
  const [city, setCity] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')
  const [province, setProvince] = React.useState('')
  const [previousSchool, setPreviousSchool] = React.useState('')
  const [religion, setReligion] = React.useState('')

  async function onSubmit() {
    console.log('submitting')
      setIsLoading(true)
      createApplication({
        appEnvId: organizationId,
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        gender,
        enrollmentGradeId: '1',
        phone1,
        phone2,
        addressLine1,
        addressLine2,
        city,
        country,
        postalCode,
        previousSchool,
        religion: 'Christian',
        schoolId: organizationId
      }).then(({ data }) => {
        if (data) {
          console.log(data)
          alert('Application submitted successfully')
        }
      }).catch((error) => {
        console.error(error)
        setError('An error occurred while submitting the application')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <CircularProgress sx={{ display: isLoading ? 'block' : 'none' }} />
      {error && <p>{error}</p>}
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
              onChange={(e, value) => { if (value) setGender(value)}}
              renderInput={(params) => <TextField {...params} label="Gender" type="text" name="gender" required />}
            />
          </Grid2>
          <Grid2 size={6}>
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
          <Grid2 size={6}>
            <TextField
              fullWidth
              size="small"
              type="tel"
              name="phone2"
              label="Phone 2"
              onChange={(e) => setPhone2(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
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
              onChange={(e) => setProvince(e.target.value)}
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              fullWidth
              size="small"
              type='text'
              name="country"
              label="Country"
              onChange={(e) => setCountry(e.target.value)}
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
          <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={onSubmit}>Apply</Button>
          </Grid2>
        </Grid2>
    </>
  )
}
