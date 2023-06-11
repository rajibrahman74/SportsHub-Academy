import React from "react";
import { Helmet } from "react-helmet";
import useSelectedClass from "../../../../hooks/useSelectedClass";

const MySelectedClasses = () => {
  const [selectedclass] = useSelectedClass()
  console.log(selectedclass);
  return (
    <div>
      <Helmet>
        <title>Manage selected class - SportsHub Academy</title>
      </Helmet>
      <h2>This MySelectedClasses page</h2>
    </div>
  );
};

export default MySelectedClasses;