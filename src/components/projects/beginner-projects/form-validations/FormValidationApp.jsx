import { useState } from "react";
import AppHeading from "../../../common/AppHeading"
import PropTypes from "prop-types";

const ErrorText = ({ text }) => {
  return (
    <p className="text-red-400 text-sm m-0">{text}</p>
  )
}

ErrorText.propTypes = {
  text: PropTypes.string
}

const FormValidationApp = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const inputStyle = `w-full text-base px-3 py-1.5 mb-1 outline-0 text-black placeholder:text-gray-400`;
  const inputWrapper = "mb-4"

  const handleForm = (e) => {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("#cefad0")
    } else {
      setErrorUserName("Username must be at least 8 characters");
      setUserColor("#fed2d2")
    }

    if (email.includes('@gmail')) {
      setErrorEmail("");
      setEmailColor("#cefad0")
    } else {
      setErrorEmail("Email must contains @gmail");
      setEmailColor("#fed2d2")
    }

    if (password > 8) {
      setErrorPassword("");
      setPasswordColor("#cefad0")
    } else {
      setErrorPassword("Password should 8 character long.");
      setPasswordColor("#fed2d2")
    }

    if (password !== '' && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("#cefad0")
    } else {
      setErrorConfirmPassword("Password should match with confirm password.");
      setConfirmPasswordColor("#fed2d2")
    }
  }
  return (
    <>
      <AppHeading sno={9} title={"Form Valiadtion"} />
      <form onSubmit={handleForm} className="max-w-[500px] mx-auto bg-gray-900 p-5 rounded-sm" name="register">
        {/* UserName */}
        <div className={inputWrapper}>
          <input
            type="text"
            placeholder="Enter the name"
            style={{ backgroundColor: userColor }}
            className={`${inputStyle}`}
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
          />
          {errorUserName && <ErrorText text={errorUserName} />}
        </div>
        {/* Email */}
        <div className={inputWrapper}>
          <input
            type="email"
            placeholder="Enter the email"
            style={{ backgroundColor: emailColor }}
            className={`${inputStyle}`}
            value={email}
            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
          />
          {errorEmail && <ErrorText text={errorEmail} />}
        </div>
        {/* Password */}
        <div className={inputWrapper}>
          <input
            type="password"
            placeholder="Enter the password"
            style={{ backgroundColor: passwordColor }}
            className={`${inputStyle}`}
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
          {errorPassword && <ErrorText text={errorEmail} />}
        </div>
        {/* Confirm Password  */}
        <div className={inputWrapper}>
          <input
            type="password"
            placeholder="Comfirm the password"
            style={{ backgroundColor: confirmPasswordColor }}
            className={`${inputStyle}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value.trim())}
          />
          {errorConfirmPassword && <ErrorText text={errorConfirmPassword} />}
        </div>
        {/* Button */}
        <div className="mt-4">
          <button type="submit" className="bg-black px-4 py-2 hover:bg-black/70">Submit</button>
        </div>
      </form>
    </>
  )
}

export default FormValidationApp