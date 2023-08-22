import { useState } from "react";
import Form from "../pages/Form";
import Info from "../pages/Info";
import Submited from "../pages/Submited";

const Body = () => {
  const [page, setPage] = useState("form");
  const [formData, setFormData] = useState();
  return (
    <div>
      {page == "form" && (
        <Form page={page} setPage={setPage} setFormData={setFormData} />
      )}
      {page == "info" && (
        <Info page={page} setPage={setPage} formData={formData} />
      )}
      {page == "submited" && <Submited page={page} setPage={setPage} />}
    </div>
  );
};

export default Body;
