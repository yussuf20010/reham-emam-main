import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Profile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    companyName: "ABC Inc",
    address: "123 Main St",
    city: "Cityville",
    state: "CA",
    postcode: "12345",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };
  const userProducts = [
    { id: 1, name: "Product 1", description: "Description for Product 1" },
    { id: 2, name: "Product 2", description: "Description for Product 2" },
    { id: 3, name: "Product 3", description: "Description for Product 3" },
  ];
  return (
    <>
      <Breadcrumb title="Checkout" />

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="User Profile"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                {/* ... Additional input fields */}
              </div>
              <div className="row mt-3">
                {/* ... Additional input fields */}
              </div>
              <div className="mt-5">
                <button className="btn btn-primary" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience">
          <span>Items</span>
        </div>
        <br />
        {userProducts.map((product) => (
          <div key={product.id} className="mb-3">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>

      <Facility />
    </>
  );
};

export default Profile;
