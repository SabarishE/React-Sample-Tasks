import React, { useState } from "react";

import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export function Userlist({ userlist, setuserlist, edit, setedit }) {
  const [d, setd] = useState();

  let { path, url } = useRouteMatch();

  return (
    <>
      <div id="read-user">
        {d ? (
          <Switch>
            <Route path={`${path}/:subpath`}>
              <div id="details-user">
                <div id="details-user-top">
                  <h2>Details of {d.name}</h2>
                  <div>Profession --- {d.profession}</div>
                  <div>Age --- {d.age}</div>
                  <div>Salary --- ${d.salary}</div>
                </div>

                <div id="path-div">
                  <h4>
                    Dynamic change in path of URL : <br />
                    <span style={{ color: "blue" }}>
                      "Switch between users and Click details button ,
                      corresponding URL change will be reflected below"
                    </span>
                  </h4>
                  <h3>useRouteMatch & useParams</h3>
                  <Subpath />
                </div>
              </div>
            </Route>
          </Switch>
        ) : (
          ""
        )}
        <div id="userlist">
          {userlist.map((v, i) => (
            <div id="userdetail" key={i}>
              <div>
                <table style={{ margin: "auto" }}>
                  <tbody>
                    <tr>
                      <td className="th">Name </td>
                      <td className="td">{v.name}</td>
                    </tr>
                    <tr>
                      <td className="th">Profession</td>
                      <td className="td">{v.profession}</td>
                    </tr>
                    <tr>
                      <td className="th">Age</td>
                      <td className="td">{v.age}</td>
                    </tr>
                    <tr>
                      <td className="th">Salary</td>
                      <td className="td">${v.salary}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <Link to={`${url}/${v.name.replace(/\s+/g, "")}`}>
                  <button id="details-btn" onClick={() => setd(v)}>
                    Details
                  </button>
                </Link>
              </div>

              <div>
                <Link to={`/edituser`} id="link-edit">
                  <button
                    id="edit-btn"
                    onClick={() => {
                      setedit({ ...edit, v });
                    }}
                  >
                    EDIT
                  </button>
                </Link>
              </div>
              <div>
                <button
                  id="delete-btn"
                  onClick={() =>
                    setuserlist(userlist.filter((e) => e.name !== v.name))
                  }
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Subpath() {
  let { subpath } = useParams();

  return (
    <>
      <h2 id="path-320px">/userlist/{subpath}</h2>
    </>
  );
}
