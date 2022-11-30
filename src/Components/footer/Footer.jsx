import React from 'react'
import { useState, useEffect } from "react";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className="bg-slate-50">
      <div className="container py-12 text-center">
        <p>&copy; Equip Africa | RESTRATEGIZE - {date}</p>
      </div>
    </footer>
  );
}

export default Footer