import React from "react"
import { TextField, Button } from "@material-ui/core"
import 'assets/styles/document.css'

export default function GettingStarted() {
    const [mail, setMail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isNotValidMail, setIsNotValidMail] = React.useState(true)
    const [isNotValidPassword, setIsNotValidPassword] = React.useState(true)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      switch (name) {
        case "mail":
          setMail(value)
          const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
          setIsNotValidMail(!reg.test(value))
          break
        case "password":
          setPassword(value)
          setIsNotValidPassword(!(value.length > 4))
          break
      }
    }

    return (
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <h1>Getting Started</h1>
          <p>In this sction, we'd like to give you a credit for using our service as example.</p>
          <h2>API token</h2>
          <p>We'd like to issue the API token. You can issue it right after register your email and password. Just example ID so it's unnecessary to set difficult password.</p>
          <div className="getting-started-input-form">
            <TextField id="mail" name="mail" label="Mail" error={isNotValidMail} margin="normal" value={mail} onChange={handleChange} />
          </div>
          <div className="getting-started-input-form">
            <TextField id="password" name="password" error={isNotValidPassword} label="Password" type="password" margin="normal" value={password} onChange={handleChange} />
          </div>
          <div className="getting-started-input-button">
            <Button variant="contained" disabled={isNotValidMail || isNotValidPassword}>Submit</Button>
          </div>
          <p>You can issue the API token without any complex operation.</p>
        </div>
      </div>
    )
}
