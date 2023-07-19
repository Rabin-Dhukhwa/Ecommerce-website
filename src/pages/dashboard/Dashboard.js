import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <AdminLayout pageTitle="Dashboard">
      <div className="home-page">
        <div className="hero animate__animated animate__fadeIn">
          <h1 className="animate__animated animate__bounceInDown">
            Welcome to Your CMS
          </h1>
          <p className="animate__animated animate__fadeIn">
            Manage your content efficiently with our powerful CMS
          </p>
        </div>
        <div className="features">
          <div className="feature animate__animated animate__fadeInLeft">
            <h2>Create and Edit Content</h2>
            <p>
              Easily create and edit various types of content using our
              intuitive interface.
            </p>
          </div>
          <div className="feature animate__animated animate__fadeInUp">
            <h2>Manage Media Files</h2>
            <p>
              Organize and access your media files in a centralized media
              library.
            </p>
          </div>
          <div className="feature animate__animated animate__fadeInRight">
            <h2>User Management</h2>
            <p>
              Create and manage user accounts with different roles and
              permissions.
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
