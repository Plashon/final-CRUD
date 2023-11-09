import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const MonitorDetail = () => {
  const { id } = useParams();
  const [mntData, setMntData] = useState({});
  useEffect(() => {
    fetch("http://localhost:1029/monitor/" + id)
      .then((res) => res.json())
      .then((data) => {
        setMntData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Monitor Detail</h2>
            </div>
            {mntData && (
              <div className="card-body">
                <img src={mntData.image + "&" + mntData.id} alt="monitor" />
                <div className="card-text">
                  <h3>
                    {mntData.name}-({mntData.id})
                  </h3>
                  <h4>Monitor Deteil:</h4>
                  <h5>brand: {mntData.brand}</h5>
                  <h5>model: {mntData.model}</h5>
                  <h5>price: {mntData.price}</h5>
                  <h5>dimension: {mntData.dimention}</h5>
                </div>
                <Link className="btn btn-danger" to="/">
                  Back to Listins
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitorDetail;