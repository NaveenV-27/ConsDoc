'use client';

import { useState } from 'react';
import Image from 'next/image';
import doctor from '@/public/doctor.png';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    date: '',
    doctor: '',
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div className="min-h-screen bg-cyan-50">
      <nav className="bg-cyan-600 text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex items-center gap-1 cursor-pointer hover:scale-105'>
            <Image src={doctor}  alt="Logo" className="h-8 w-8 rounded-full" />
            <h1 className="text-xl font-bold">Cons<span className='text-cyan-200'>Doc</span></h1>
          </div>
          <ul className="flex space-x-4 text-cyan-200">
            <li className="hover:scale-105 cursor-pointer">Home</li>
            <li className="hover:scale-105 cursor-pointer">Appointments</li>
            <li className="hover:scale-105 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6 border border-cyan-200">
        <h2 className="text-2xl font-bold text-center text-cyan-700">Book a Doctor Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-cyan-700">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          />
          <input
            type="text"
            name="doctor"
            placeholder="Doctor Name"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 border border-cyan-300 rounded-lg bg-cyan-100 text-cyan-900">
            <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
            <ul className="space-y-1">
              <li><strong>Patient Name:</strong> {submitted.name}</li>
              <li><strong>Phone Number:</strong> {submitted.phone}</li>
              <li><strong>Age:</strong> {submitted.age}</li>
              <li><strong>Gender:</strong> {submitted.gender}</li>
              <li><strong>Appointment Date:</strong> {submitted.date}</li>
              <li><strong>Doctor Name:</strong> {submitted.doctor}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
