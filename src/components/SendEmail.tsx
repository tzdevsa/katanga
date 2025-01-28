'use client'

import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function SendEmail({ email }: { email: string }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <form
        action={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`)}`}
        method="post"
        encType="text/plain"
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">
              SEND EMAIL
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
