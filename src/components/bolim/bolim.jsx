import { useEffect, useRef, useState } from "react";
import { img_url } from "../../context/start";
import { GET } from "../../utils/api/get";
import { useNavigate } from 'react-router-dom'
import person from "../../img/person.svg";
import women from "../../img/women.svg";
import search from "../../img/main_search.svg";
import error from '../../img/search-not-found-5342748-4468820.webp'
import "./bolim.scss";

export const Bolim = () => {
  const [categories, setCategories] = useState([]);
  const input = useRef();
  const navigate = useNavigate()

  function Search(evt) {
    if (evt.target.value !== "") {
      GET(`/categories/` + evt.target.value)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    } else {
      GET(`/categories/list`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
  }
  useEffect(() => {
    GET(`/categories/list`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="box-wrapper">
        <div className="wrapper">
          <img className="img" src={person} alt="" />
          <div className="">
            <h2 className="heading">Siz nimani o'rganmoqchisiz?</h2>
            <p className="text">
              Doimiy ravishda mavjud toifalar bo'yicha kurslarni to'ldirish va
              yangilarini tashkil etish ustida ishlamoqda!
            </p>
            <div className="form">
              <img className="search" src={search} alt="" />
              <input
                onChange={Search}
                ref={input}
                className="input"
                type="search"
                name=""
                placeholder="Kursni qidirsh"
              />
            </div>
          </div>
          <img className="img" src={women} alt="" />
        </div>
      </div>

      <div>
        <div className="box">
          <h3 className="main_heading">Barcha bo’limlar</h3>
          <p className="main_text">
            Qabul qilingan yakuniy bilim, albatta, kunning shirinligi nega
            samimiy
          </p>
        </div>

        <ul className="list">
          {categories.length ? (
            categories.map((e) => {
              return (
                <li key={e.id} className="item">
                  <img
                    className="main_img"
                    src={img_url + e.image}
                    alt="category_img"
                    width={80}
                    onClick={() => navigate('/bolim/' + e.title)}
                    height={80}
                  />
                  <p className="list_text">{e.title}</p>
                </li>
              );
            })
          ) : (
            <img className="error_image" style={{ margin: "0 auto 50px auto" }} src={error} alt="error" />
          )}
        </ul>
      </div>
    </>
  );
};
