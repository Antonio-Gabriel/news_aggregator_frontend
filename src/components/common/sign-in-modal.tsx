import { useState } from 'react'
import { Modal } from 'reactstrap'

import * as yup from 'yup'
import { useFormik } from 'formik'

import { Input } from './input'
import { Button } from './button'

import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/user/use-auth'

import './styles/modal.scss'

type SignInModalProps = {
  isOpenSignInModal: boolean
  toggleSignInModal: () => void
}

type SignInFormValues = Authentication.Module.SignInFormValues

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail is required').email('Invalid email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

export function SignInModal(props: SignInModalProps) {
  const { signIn: userSignIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [focusAfterClose, setFocusAfterClose] = useState(true)

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik<SignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInFormSchema,
    onSubmit: (values) => {
      signIn(values)
    },
  })

  function signIn({ email, password }: SignInFormValues) {
    setIsLoading(true)
    setFocusAfterClose(false)
    userSignIn({
      email,
      password,
    })
      .catch(() =>
        toast.error('Unauthorized, please check your email and password'),
      )
      .then((res: any) => {
        if (res.isAuth) {
          props.toggleSignInModal()
          resetForm()
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Modal
      returnFocusAfterClose={focusAfterClose}
      isOpen={props.isOpenSignInModal}
      className="custom-modal-dialog"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="exampleModalLabel">
            <h4> Sign In</h4>
            <p>Malesuada egestas nunc vestibulum</p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.toggleSignInModal}
          ></button>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="modal-body">
            <Input
              name="email"
              label="Your email"
              placeholder="Your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <Input
              name="password"
              label="Your password"
              placeholder="Your password"
              type="password"
              isPassword={true}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />
          </div>

          <div className="model-footer">
            <Button
              variant="primary"
              disabled={isLoading ? true : false}
              type="submit"
              isAction={false}
            >
              {isLoading ? 'Loading...' : 'Sing In'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
