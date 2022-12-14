import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useState } from "react";

export default function Create() {
  const [title_course, setTitleCourse] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const MySwal = withReactContent(Swal);
  const record = {
    title_course,
    author,
    description,
  };
  const createCourse = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      await axios.post("http://127.0.0.1:8000/api/admin/course/create", record);
      setTitleCourse("");
      setAuthor("");
      setDescription("");
      MySwal.fire({
        title: <strong>Success Membuat course</strong>,
        html: <i>Berhasil membuat course</i>,
        icon: "success",
      });
    } catch (error) {
      console.log("ada error di create course");
    }
  };
  return (
    <div className="w-full sm:w-1/2">
      <h1 className="text-3xl font-bold font-text_primary text-gray-800 mb-5">
        Create Course
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={createCourse}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Title"
            type="text"
            placeholder="Title Course"
            value={title_course}
            onChange={(e) => setTitleCourse(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border border-gray-500"
            id="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
}
