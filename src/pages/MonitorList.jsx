import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MonitorList = () => {
  const [mntData, setMntData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:1029/monitor")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setMntData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/monitor/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/monitor/detail/" + id);
  };
  const removeMonitor = (id) => {
    if (window.confirm("Do you want to remove")) {
      fetch("http://localhost:1029/monitor/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("remove successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Monitor List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/monitor/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>brand</td>
                <td>model</td>
                <td>price </td>
                <td>dimension</td>
              </tr>
            </thead>
            <tbody>
              {mntData &&
                mntData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.brand}</td>
                    <td>{item.model}</td>
                    <td>{item.price}</td>
                    <td>{item.dimention}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeMonitor(item.id);
                        }}
                      >
                        Remove
                      </a>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default MonitorList;
