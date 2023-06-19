import { useState } from 'react'
import { Modal } from 'reactstrap'

import { Input } from './input'
import { Button } from './button'

import * as yup from 'yup'
import { useFormik } from 'formik'

import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/user/use-auth'

import './styles/modal.scss'

type SignUpModalProps = {
  isOpenSignUpModal: boolean
  toggleSignUpModal: () => void
  toggleSignInModal: () => void
}

type SignUpFormValues = App.Module.UserData

const signUnFormSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 6 characters'),
  email: yup.string().required('E-mail is required').email('Invalid email'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})

export function SignUpModal(props: SignUpModalProps) {
  const { signUp: userSignUp } = useAuth()
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
  } = useFormik<SignUpFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signUnFormSchema,
    onSubmit: (values) => {
      signUp(values)
    },
  })

  function signUp({ name, email, password }: SignUpFormValues) {
    setIsLoading(true)
    setFocusAfterClose(false)
    userSignUp({
      name,
      email,
      password,
    })
      .catch(() => toast.error('An error occured, please try again'))
      .then((res: any) => {
        if (res.created) {
          toast.success('User created')

          props.toggleSignUpModal()

          props.toggleSignInModal()

          resetForm()
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <Modal
      returnFocusAfterClose={focusAfterClose}
      isOpen={props.isOpenSignUpModal}
      className="custom-modal-dialog"
    >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title" id="exampleModalLabel">
            <h4> Sign Up</h4>
            <p>Malesuada egestas nunc vestibulum</p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props.toggleSignUpModal}
          ></button>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="modal-body">
            <Input
              name="name"
              label="Your name"
              placeholder="Your name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
            />
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
              {isLoading ? 'Loading...' : 'Sing Up'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
