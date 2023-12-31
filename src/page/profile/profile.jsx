import { useEffect, useState } from "react";
import { GET } from "../../utils/api/get";
import useStart from "../../hooks/useStart";
import "./profile.scss";

export const Profile = () => {
  const { token } = useStart()
  const [findUser, setFindUser] = useState()

  useEffect(() => {
    GET('/users/one', token)
      .then(re => re.json())
      .then(data => setFindUser(data))
  }, [setFindUser, token]);

  return (
    <>
      <div>
        <div>
          <h2 className="headingg">Profil sozlamasi</h2>
          <p className="textt">
            Bu maʼlumotlar maxfiy hisoblanadi. Ularni faqat siz ko'rasiz.
          </p>
        </div>
        <div>
          <form className="form_dev">
            <div className="profile_flex">
              <div>
                <div>
                  <div>
                    <p className="tex">Email pochta</p>
                    <input className="form_inp disabled" type="email" placeholder="E-mail" disabled defaultValue={findUser?.email} />
                  </div>
                  <div>
                    <p className="tex">Parol</p>
                    <input className="form_inp" type="password" placeholder="Password" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="tex">Login</p>
                    <input className="form_inp" type="text" placeholder="Login" />
                  </div>
                  <div>
                    <p className="tex">Til</p>
                    <select className="form_inp">
                      <option value="">O'zbekcha</option>
                      <option value="">Ruscha</option>
                      <option value="">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="profile_btn">Tasdiqlash</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
