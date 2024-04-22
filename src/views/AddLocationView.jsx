import { useState } from "react";

function AddLocationView() {
  const [formInfo, setFormInfo] = useState({
    city: "",
    country: "",
    dateFrom: "",
    dateTo: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((initialState) => ({
      ...initialState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);
  };

  return (
    <>
      <div className="headerBackground"></div>
      <div className="formBackground">
        <div className="formBackgroundMask"></div>
      </div>

      <div className="formContainer">
        <div className="formDescription">
          <h2>Do you have a suggestion for us?</h2>
          <br />
          <h4>
            Submit your travel ideas and you might find them featured in a
            future post.
          </h4>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formInfo.city}
              placeholder="city"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formInfo.country}
              placeholder="country"
              onChange={handleChange}
              required
            />
          </label>

          <span>
            <label>
              from:
              <input
                type="date"
                name="dateFrom"
                value={formInfo.dateFrom}
                placeholder="date"
                onChange={handleChange}
              />
            </label>

            <label>
              to:
              <input
                type="date"
                name="dateTo"
                value={formInfo.dateTo}
                placeholder="date"
                onChange={handleChange}
              />
            </label>
          </span>

          <fieldset>
            <legend>Descripition/Places to visit</legend>
            <label>
              <textarea
                name="description"
                cols="40"
                rows="10"
                value={formInfo.description}
                onChange={handleChange}
              ></textarea>
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default AddLocationView;
