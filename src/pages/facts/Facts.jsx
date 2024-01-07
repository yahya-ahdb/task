import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFactsMutation } from "../../redux/RtkSlices/BreedsSlice";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";

function Facts() {
  const [link, setLink] = useState(1);
  const [facts, { isLoading, data }] = useFactsMutation();
  useEffect(() => {
    facts({ id: link });
  }, [link]);

  return (
    <div>
    {isLoading && <Loader />}
      <div className="container pt-4" >
      <Link className="text-dark" to={"/"}>
          <i className="fa-solid fa-arrow-left fs-4 my-5"></i>{" "}
          <span className="fs-4 ms-2 fw-bold">Facts</span>
        </Link>
      </div>
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {data?.data?.map((item, i) => (
          <Card className="mt-4" key={i} sx={{ maxWidth: 275 , background: i%2 == 0 ? "#fff" : "#cccccc75" }}>
            <CardContent>
              <Typography variant="body2">well meaning and kindly.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small"> More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-between align-center container my-3">
          <button
              disabled={isLoading || link == 1}
              onClick={() => setLink(link - 1)}
              className="btn btn-outline-primary px-3  me-3"
            >
              {"<-"}
            </button>
            <div>
            {data?.links?.map((item, i)=>
            <>
            {(item?.label !== "Previous" && item?.label !== "Next" )?
              <button
              key={i}
              disabled={isLoading || item?.active}
              onClick={() => setLink(item?.label)}
              className="btn btn-outline-primary px-3  me-3"
            >
              {item?.label}
            </button>: ""}
            </>
            )}
            </div>
            <div>

            <button
              disabled={isLoading || data?.last_page == link}
              onClick={() => setLink(link + 1)}
              className="btn btn-outline-primary px-3 "
            >
              {"->"}
            </button>
            </div>
          </div>
    </div>
  );
}

export default Facts;
