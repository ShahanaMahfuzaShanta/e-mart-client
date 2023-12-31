import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useSubCategory from "../../../../Hooks/useSubCategory";
import AdminTitle from "../../../../Component/AdminTitle";


const ManageSubCategories = () => {
  const {axiosSecure} = useAxiosSecure();
  const navigate = useNavigate();
  const [subCategory, refetch] = useSubCategory();

  const handleDelete = (subCategory) => {
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
        axiosSecure.delete(`/sub-categories/${subCategory._id}`)
          .then((data) => {
            if (data?.data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="h-full">
        
        <AdminTitle heading={`Manage Sub-Categories (${subCategory.length})`} />
        <section className="px-4 bg-white max-w-5xl mx-auto">
        {/* table  */}

        <div className="relative shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              {subCategory.map((subCategory) => (
                <tr key={subCategory._id} className={`bg-white border-b  hover:bg-gray-50 `} >
                  {/* row 1 */}

                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={subCategory.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden">
                          {subCategory.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  
                  <td  className="px-6 py-4">
                    
                          <Link className="flex items-center font-medium text-blue-600 hover:underline" to={`/dashboard/upload/upload-sub-category/${subCategory.slug}/home-page-layout`}>
                            <BiEdit /> Edit
                          </Link>
                        
                          
                        
                  </td>
                  <td  className="px-6 py-4"><button className="flex items-center font-medium text-red-600" onClick={() => handleDelete(subCategory)}>
                            <AiOutlineDelete />
                            Delete
                          </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      </div>
    </>
  );
};

export default ManageSubCategories;
