import { Input } from "../common/input";
import "./styles/footer.scss";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="newsletter">
              <h2>Newsletter</h2>

              <div className="form-newsletter">
                <Input
                  placeholder="Email Address..."
                  type="text"
                  className="input-size"
                  icon={
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  }
                />
              </div>

              <ul className="nav-social-link">
                <li className="nav-item">
                  <a href="" target="_blank" className="nav-link active">
                    LinkedIn
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" target="_blank" className="nav-link">
                    Github
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" target="_blank" className="nav-link">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p>© 2023 Antonio Gabriel. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
