import { FunctionComponent, useContext } from 'react'
import { Form } from 'react-bootstrap'
import logo from '../assets/images/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { ROLE_IDS } from '../constants/Permissions';
import { useTranslation } from 'react-i18next';

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const location = useLocation();
  const auth = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  }
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={logo} alt="logo" />
              </div>
              <h4>{t('LOGIN.GREETING')}</h4>
              <h6 className="font-weight-light">{t('LOGIN.CONTINUE')}</h6>
              <Form className="pt-3" onSubmit={handleSubmit}>
                <Form.Select size="lg" name='username'>
                  {Object.keys(ROLE_IDS).map((item: string) => <option key={item} value={item}>{item}</option>)}
                </Form.Select>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn w-100 me-0">{t('COMMON.SIGN_IN')}</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Login
