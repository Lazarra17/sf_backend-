import styled from "styled-components";

const StyleWrapper = styled.div`
  .login-form {
    width: 350px;
    margin: 0 auto;
    padding: 30px 0;
    margin-top: 10%;
    .login-logo {
      text-align: center;
      margin-bottom: 8px;
      img {
        width: 140px;
      }
    }
    .login-title {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 20px;
      .version {
        font-size: 0.75rem;
        margin: 8px 0;
      }
    }

    h4 {
      text-align: center;
      font-size: 22px;
      margin-bottom: 20px;
    }

    form {
      color: #434343;
      border-radius: 1px;
      margin-bottom: 15px;
      background: #fff;
      ${"" /* border: 1px solid #f3f3f3; */}
      ${"" /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); */}
            padding: 12px;
      .form-group {
        .form-label {
          font-size: 0.75rem;
          margin-bottom: 4px;
        }
        .form-control {
          box-shadow: none;
          border-color: #d8d8d8;
          font-size: 0.75rem;
          border-radius: 0;
        }
      }
    }
  }
`;

export default StyleWrapper;
