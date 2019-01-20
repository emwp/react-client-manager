import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Link to="/clients/add" className="btn btn-success btn-block">
      New <i className="fas-fa-plus" />
    </Link>
  );
}