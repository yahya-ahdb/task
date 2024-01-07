import React, { useEffect, useState } from "react";
import { useBreedsMutation } from "../../redux/RtkSlices/BreedsSlice";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loader from "../../utils/Loader";

function Breeds() {
  const [link, setLink] = useState(1);
  const [breeds, { data, isLoading }] = useBreedsMutation();
  useEffect(() => {
    breeds({ id: link });
  }, [link]);
  return (
    <>
      {isLoading && <Loader />}
      <div className="container pb-5">
        <Link className="text-dark" to={"/"}>
          <i className="fa-solid fa-arrow-left fs-4 my-5"></i>{" "}
          <span className="fs-4 ms-2 fw-bold">Breeds</span>
        </Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ background: "#ccc" }}>
                <TableCell className="text-dark fs-5 fw-bold">Breed</TableCell>
                <TableCell className="text-dark fs-5 fw-bold" align="left">
                  Coat
                </TableCell>
                <TableCell className="text-dark fs-5 fw-bold" align="left">
                  Country
                </TableCell>
                <TableCell className="text-dark fs-5 fw-bold" align="left">
                  Origin
                </TableCell>
                <TableCell className="text-dark fs-5 fw-bold" align="left">
                  Pattern
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((item, i) => (
                <TableRow
                  key={item?.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    background: i % 2 !== 0 ? "#cccccc57" : "#fff",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item?.breed}
                  </TableCell>
                  <TableCell align="left">{item?.coat}</TableCell>
                  <TableCell align="left">{item?.country}</TableCell>
                  <TableCell align="left">{item?.origin}</TableCell>
                  <TableCell align="left">{item?.pattern}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
        </TableContainer>
      </div>
    </>
  );
}

export default Breeds;
