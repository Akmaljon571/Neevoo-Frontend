import "./profile.scss";

export const Profile = () => {
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
                    <input className="form_inp" type="email" name="" id="" placeholder="E-mail" disabled defaultValue={"sofaw13022@raotus.com"}/>
                </div>
                <div>
                    <p className="tex">Parol</p>
                    <input className="form_inp" type="password" name="" id="" placeholder="Password"/>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                    <p className="tex">Login</p>
                    <input className="form_inp" type="text" name="" id="" placeholder="Login" /> 
                </div>
                <div>
                    <p className="tex">Til</p>
                <select disabled className="form_inp" name="" id="">
                    <option disabled selected  value="">language</option>
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
