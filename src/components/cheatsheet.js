export function Cheatsheet() {
  return (
    <>
      <div id="cheatsheet">
        {/* --------part 1---------- */}
        <h2> Hooks , Packages / Dependencies used : </h2>
        <ul>
          <li>Usestate</li>
          <li>Usecontext</li>
          <li>Context API, Usecontext</li>
          <br />

          <li>react-router-dom</li>
          <br />

          <li>react-hook-form</li>
          <li>hookform-resolvers</li>
          <li>yup</li>
          <br />

          <li>react-chartjs-2</li>
          <li>chart.js</li>
          <br />

          <li>material-ui/core</li>
          <li>material-ui/icons</li>
        </ul>

        {/* --------part 2 ---------- */}
        <h2>Functionalities applied</h2>
        <br />

        {/* ------ 1 --------- */}
        <ul>
          <h3>(1) Transfer of props/states with and without props drilling</h3>
          <li>Reusable components are made in HOC patterns</li>
          <li>
            Value from one components are shown in other components using props
          </li>
          <li>
            Usestate hook has been used to set dynamic data to the properties of
            components
          </li>
          <li>Props drilling is used.</li> <br />
          <h5>"Example"----:</h5>{" "}
          <li>
            Check out Rightside component in which uselist data is drilled to
            other components
          </li>
          <li>
            Props is avoided at an instance by using Context API and Usecontext
            hookform
          </li>
          <br />
          <h5>"Example"----:</h5>
          <h5>
            Functionality for left side navigation bar by converting it into a
            Drawer using CSS for responsive design
          </h5>
          <li>
            {" "}
            An instance of context called navDrawer is created in context.js
            file
          </li>
          <li>
            {" "}
            navDrawer.Provider provides the values of side and setside in App.js
            file
          </li>
          <li>
            This provided value is received by Topnav component in rightside.js
            file using Usecontext hook
          </li>
          <li>
            (Since Class components are not used usecontext hook replaces
            context.consumer)
          </li>
          {/* ------ 2 --------- */}
          <h3>(2) CRUD and forms with validation using yup</h3>
          <li>
            CRUD operation are included for user data (3 initial sample data are
            provided)
          </li>
          <br />
          <h5>"Example"----:</h5>
          <li>
            Adduser componentcontains the react form with yup resolver and
            validation schema is used
          </li>
          <li>
            Edituser component can be used to update and make changes in the
            existing user data
          </li>
          <li>User list component can be used to read all the user data</li>
          <br />
          {/* ------ 3 --------- */}
          <h3>(3) use-params and use-route-match</h3>
          <li>use route match is used to match the current URL and path</li>
          <br />
          <h5>"Example"----:</h5>
          <li>
            Click on details button is userlist and URL is displayed
            <br />
            Here userlist is parent and the userdetails of a particular user is
            a child
          </li>
          <li>Use params is used to get the path</li>
          {/* --------- 4 --------- */}
          <h3>(4) Routing</h3>
          <li>Routing has been used to render routes by links</li>
          <li>
            Redirection is used to redirect to dashboard whenever app is loaded{" "}
          </li>
        </ul>
      </div>
    </>
  );
}
