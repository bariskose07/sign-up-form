import classes from './App.module.css';
import Input from './components/UI/Input';

const hasCharacters = (value) => value.trim().length > 0

const emailValidation = (value) => value.split('@').length === 2

const passwordValidation = value => /\d/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value) && value.length > 7


function App() {
  const submitHandler = (event) => {
    event.preventDefault();
  }

  return <form id='myForm' onSubmit={submitHandler} className={classes.form}>
    <header className={classes.title}>Sign Up</header>
    <div className={classes["name-wrapper"]}>
      <Input id={'name'} text={'Name'} placeholder={'Please enter your name...'} type={'text'} validationFunc={hasCharacters} errMessage='Please enter a valid name' />
      <Input id={'lastname'} text={'Lastname'} placeholder={'Please enter your lastname...'} type={'text'} validationFunc={hasCharacters} errMessage='Please enter a valid lastname' />
    </div>
    <Input id={'username'} text={'Username'} placeholder={'Please enter a username...'} type={'text'} validationFunc={hasCharacters} errMessage='Please enter a valid username' />
    <Input id={'email'} text={'E-mail'} placeholder={'Please enter your E-mail...'} type={'email'} validationFunc={emailValidation} errMessage='Please enter a valid email' />
    {/* <Input id={'birthday'} text={'Birthday'} placeholder={'Please enter your birthday...'} type={'date'} validationFunc={} /> */}
    <Input id={'password'} text={'Password'} placeholder={'Please enter a password (at least 8 characters)...'} type={'password'} validationFunc={passwordValidation} errMessage='Password should include at least one uppercase one lowercase letter and a number.' />
    {/* <Input id={'passwordAgain'} text={'Password Again'} placeholder={'Please enter your password again...'} type={'password'} validationFunc={} /> */}

    <div className={classes["form-actions"]}>
    <button className={classes.submitButton} type='submit'>Submit</button>
    </div>
  </form>;
}

export default App;
