import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();

  const handleJoinInClick = (e) => {
    e.preventDefault();
    navigate("/joinin");
  };

  return (
    <main className="bg-light-purple py-5" style={{ backgroundColor: "#F7F5F9" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <section>
              <article className="mt-4">
                <h1 className="text-primary fw-bold fs-2">
                  <span className="fst-italic">
                    {" "}
                    <span style={{ color: "#000000" }}>Explore your</span>
                  </span>{" "}
                  <span className="fst-italic text-info">hobby</span>{" "}
                  <span className="fst-italic">
                    {" "}
                    <span style={{ color: "#000000" }}>or</span>
                  </span>{" "}
                  <span className="fst-italic text-primary">
                    {" "}
                    <span style={{ color: "#8064A2" }}>passion</span>
                  </span>
                </h1>
                <p className="mt-4">
                  Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                  suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about
                  visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor
                  activities…
                </p>
                <p className="mt-4">
                  If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
                  products, services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73e00ff195f8012a76aac87e41170b0260a68201dd3f65db13a9b1777f47ff35?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                  alt="Hobby Image"
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
                   <div className="text-primary"  style={{ cursor: "pointer" }}  style={{ paddingTop: "6px" }}>
                      <h2 className="h4" style={{ borderBottom: "2px solid #8064A2" }}>Sign In</h2>
                    </div>
                    <div className="text-primary">
                      <h2 className="h4"  onClick={handleJoinInClick}>Join In</h2>
                    </div>
                  </header>
                  <button className="btn btn-outline-primary d-flex justify-content-between align-items-center gap-2 my-3 w-100">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20043c95030375fb899cc082b2f7de981c0b64d99e7a4af7bc9f8c9880ae07a?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
                      alt="Google"
                      className="img-fluid"
                      style={{ width: "16px", aspectRatio: "1", objectFit: "cover", objectPosition: "center" }}
                    />
                    <span>Continue with Google</span>
                  </button>
                  <button className="btn btn-outline-primary d-flex justify-content-between align-items-center gap-2 my-3 w-100">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcae57a5043cfd1836d494b1c1bde80b68bd573640e61dca26c6b58b7d5583e?apiKey=a9b31426ea8c42508c8d83a25324d8b5&"
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
                      <label htmlFor="remember" className="form-check-label">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#forgot-password" className="text-decoration-none">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary w-100">
                    Continue
                  </button>
                </form>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
