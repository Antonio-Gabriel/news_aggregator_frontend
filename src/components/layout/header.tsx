import { Collapse } from 'reactstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { UserInfo } from '../user-info'
import { Button } from '../common/button'

import { SignInModal } from '../common/sign-in-modal'
import { SignUpModal } from '../common/sign-up-modal'

import logo from '../../assets/images/logo.svg'

import { RootState } from '../../app/store'
import { authenticationObserver } from '../../app/feactures/auth-slice'

import './styles/header.scss'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false)
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false)

  const dispatch = useDispatch()
  const { isAuth } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(authenticationObserver())
  }, [])

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu)
  const toggleSignInModal = () => setIsOpenSignInModal(!isOpenSignInModal)
  const toggleSignUpModal = () => setIsOpenSignUpModal(!isOpenSignUpModal)

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>

            <button className="navbar-toggler" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>

            <Collapse isOpen={isOpenMenu} navbar>
              <ul className="navbar-nav me-auto">
                <li className="nav-link">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-link">
                  <Link to="" className="nav-link">
                    About us
                  </Link>
                </li>
              </ul>
              <div className="content">
                {isAuth ? (
                  <UserInfo className="content-responsive" />
                ) : (
                  <div className="d-flex cta">
                    <Button
                      variant="secondary"
                      isAction={false}
                      onClick={toggleSignInModal}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="primary"
                      isAction={false}
                      onClick={toggleSignUpModal}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </Collapse>
          </div>
        </nav>
      </header>

      <SignInModal
        isOpenSignInModal={isOpenSignInModal}
        toggleSignInModal={toggleSignInModal}
      />

      <SignUpModal
        isOpenSignUpModal={isOpenSignUpModal}
        toggleSignInModal={toggleSignInModal}
        toggleSignUpModal={toggleSignUpModal}
      />
    </>
  )
}
