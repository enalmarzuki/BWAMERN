/* ==================== EXAMPLE CALENDAR ========================================= */

// import React, { Component } from "react";
// import InputDate from "elements/Form/InputDate";

// export default class Example extends Component {
//   state = {
//     value: {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className="container">
//         <div
//           className="row align-items-center justify-content-center"
//           style={{ height: "100vh" }}
//         >
//           <div className="col-auto">
//             <InputDate
//               max={30}
//               onChange={this.handleChange}
//               name="value"
//               value={this.state.value}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
/* ==================== EXAMPLE CALENDAR ========================================= */

/* ==================== EXAMPLE BREADCRUMB ========================================= */
import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
/* ==================== EXAMPLE BREADCRUMB ========================================= */
