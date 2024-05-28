import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function JoinInPage() {
  const handleSignInClick = () => {
    window.location.href = "/signin";
  };

  return (
    <main className="bg-light-purple py-5" style={{ backgroundColor: "#F7F5F9" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <section>
              <article className="mt-4">
                <h1 className="text-primary fw-bold fs-2 fst-italic">
                  Explore your <span className="text-info">hobby</span> or <span className="text-primary" style={{ color: "#8064A2" }}>passion</span>
                </h1>
                <p className="mt-4">
                  Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>
                <p className="mt-4">
                  If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
                <img
                  src="./joinIn.svg"
                  alt="Content image"
                  className="img-fluid mt-4"
                  style={{ aspectRatio: "3.23", objectFit: "cover", objectPosition: "center" }}
                />
              </article>
            </section>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <aside>
              <article className="fw-bold fs-6">
                <form className="mt-4">
                  <header className="d-flex justify-content-center gap-3">
                    <div className="text-primary" onClick={handleSignInClick} style={{ cursor: "pointer" }}>
                      <h2 className="h4">Sign In</h2>
                    </div>
                    <div className="text-primary" style={{ paddingTop: "6px" }}>
                      <h2 className="h4" style={{ borderBottom: "2px solid #8064A2" }}>Join In</h2>
                    </div>
                  </header>
                  <button className="btn btn-outline-primary d-flex justify-content-between align-items-center gap-2 my-3 w-100">
                    <img
                      src="./google.svg"
                      alt="Google"
                      className="img-fluid"
                      style={{ width: "16px", aspectRatio: "1", objectFit: "cover", objectPosition: "center" }}
                    />
                    <span>Continue with Google</span>
                  </button>
                  <button className="btn btn-outline-primary d-flex justify-content-between align-items-center gap-2 my-3 w-100">
                    <img
                      src="./facebook.svg"
                      alt="Facebook"
                      className="img-fluid"
                      style={{ width: "16px", aspectRatio: "1", objectFit: "cover", objectPosition: "center" }}
                    />
                    <span>Continue with Facebook</span>
                  </button>
                  <div className="d-flex align-items-center gap-3 my-4">
                    <hr className="flex-grow-1 border-light" />
                    <span className="text-muted">Or connect with</span>
                    <hr className="flex-grow-1 border-light" />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                  </div>
                  <div className="d-flex justify-content-between gap-3 my-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="remember" />
                      <label htmlFor="remember" className="form-check-label">Remember me</label>
                    </div>
                    <div>
                      <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password-strength">Password strength</label>
                    <div className="d-flex gap-2">
                      <div className="flex-grow-1 bg-light" style={{ height: "4px", borderRadius: "2px" }}></div>
                      <div className="flex-grow-1 bg-light" style={{ height: "4px", borderRadius: "2px" }}></div>
                      <div className="flex-grow-1 bg-light" style={{ height: "4px", borderRadius: "2px" }}></div>
                    </div>
                  </div>
                  <p className="text-muted mt-3">
                    By continuing, you agree to our <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>.
                  </p>
                  <button type="submit" className="btn btn-outline-primary w-100">Agree and Continue</button>
                </form>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default JoinInPage;
