import React from "react";
import Fade from "react-reveal/Fade";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailsTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div class="row align-items-center">
          <div class="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div class="col-auto text-center">
            <h1 class="h2">{data.name}</h1>
            <span class="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div class="col"></div>
        </div>
      </Fade>
    </section>
  );
}
