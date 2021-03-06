import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

function Auth(SpecificComponent, option, adminRoute = null) {
  //option
  //null    =>  아무나 출입이 가능한 페이지
  //true    =>  로그인한 유저만 출입이 가능한 페이지
  //false   =>  로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);
        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            history("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !response.payload.isAdmin) {
            history("/");
          } else {
            if (option === false) history("/");
          }
        }
      });
    }, [dispatch, history]);

    return <SpecificComponent {...props} />;
  }
  return AuthenticationCheck;
}

export default Auth;
