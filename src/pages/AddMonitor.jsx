import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddMonitor = () => {
  const [monitor, setMonitor] = useState({
    brand: "",
    model: "",
    price: "",
    dimention: "",
    image:  "https://source.unsplash.com/random/200x200/?computer" 
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setMonitor({ ...monitor, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const MonitorData = {
      brand: monitor.brand,
      model: monitor.model,
      price: monitor.price,
      dimention: monitor.dimention,
      image: monitor.image
    };
    fetch("http://localhost:1029/monitor",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(MonitorData)
    }).then(
      (res) =>{
        alert("Save Successfully")
        navigate("/")
      }
    ).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new monitor</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="brand">brand</label>
                      <input
                        type="text"
                        required
                        name="brand"
                        id="brand"
                        value={monitor.brand}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="model">model</label>
                      <input
                        type="text"
                        name="model"
                        id="model"
                        value={monitor.model}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="price">price</label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={monitor.price}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="dimention">dimention</label>
                      <input
                        type="text"
                        name="dimention"
                        id="dimention"
                        value={monitor.dimention}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="image">image</label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={monitor.image}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddMonitor;