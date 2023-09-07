import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useCategory from "../../../../Hooks/useCategory";

const AllCategories = () => {
  const [category, refetch] = useCategory();

  const handleDelete = (category) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/categories/${category._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="h-full p-10">
        <div className="">
          <p>{category.length}</p>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {category.map((category) => (
                <tr key={category._id} category={category}>
                  {/* row 1 */}

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={category.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden">
                          {category.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{category.price}</td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                  <th>
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} className="btn btn-ghost btn-xs m-1">
                        Action
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-26"
                      >
                        <li>
                          <a>
                            <BiEdit /> Edit
                          </a>
                        </li>
                        <li>
                          <button onClick={() => handleDelete(category)}>
                            <AiOutlineDelete />
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
