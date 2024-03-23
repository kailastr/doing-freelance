import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";
import supabase from "../../config/supabaseConfig";

const ClientGigs = () => {
  const [gigs, setGigs] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchGigs = async () => {
      const { data, error } = await supabase.from("DF-CreatedGig").select();

      if (error) {
        setFetchError("could not fetch the existing gigs");
        console.log(error);
      }
      if (data) {
        setGigs(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchGigs();
  }, []);
  const [data, setData] = useState([
    {
      title: "Web 3 Project",
      price: 22.55,
      location: "Kochi",
      skills: ["Photoshop", "HTML", "CSS", "Bootstrap"],
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet itaque at cupiditate, facilis excepturi doloremque aliquam quas dolorum magni culpa laborum architecto impedit eum mollitia incidunt. Similique, vero blanditiis!",
    },
    {
      title: "Python Project",
      price: 22.55,
      location: "Kochi",
      skills: ["Photoshop", "HTML", "CSS", "Bootstrap"],
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet itaque at cupiditate, facilis excepturi doloremque aliquam quas dolorum magni culpa laborum architecto impedit eum mollitia incidunt. Similique, vero blanditiis!",
    },
    {
      title: "ASP.Net Software",
      price: 22.55,
      location: "Kochi",
      skills: ["Photoshop", "HTML", "CSS", "Bootstrap"],
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet itaque at cupiditate, facilis excepturi doloremque aliquam quas dolorum magni culpa laborum architecto impedit eum mollitia incidunt. Similique, vero blanditiis!",
    },
    {
      title: "Restaurant Managment Using MERN",
      price: 22.55,
      location: "Kochi",
      skills: ["Photoshop", "HTML", "CSS", "Bootstrap"],
      describtion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet itaque at cupiditate, facilis excepturi doloremque aliquam quas dolorum magni culpa laborum architecto impedit eum mollitia incidunt. Similique, vero blanditiis!",
    },
  ]);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.Title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.Price,
      sortable: true,
    },
    {
      name: "Skills required",
      selector: (row) => row.Skills + ",",
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true,
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.Title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(_.differenceBy(data, selectedRows, "title"));
      }
    };

    return (
      <button
        key="delete"
        onClick={handleDelete}
        className=" py-1 px-5 border-2 rounded-lg bg-red-500 text-white hover:bg-red-600 text-lg"
        icon
      >
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  return (
    <div className="flex justify-center">
      <div className="w-11/12 bg-slate-100 my-10">
        <DataTable
          title="Your Gigs"
          columns={columns}
          data={gigs}
          selectableRows
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
          pagination
        />
      </div>
    </div>
  );
};

export default ClientGigs;

// import React, { useState, useEffect } from "react";
// import DataTable from "react-data-table-component";
// import _ from "lodash";
// import supabase from "../../config/supabaseConfig";

// const ClientGigs = () => {
//   const [gigs, setGigs] = useState(null);
//   const [fetchError, setFetchError] = useState(null);

//   useEffect(() => {
//     const fetchGigs = async () => {
//       const { data, error } = await supabase.from("DF-CreatedGig").select();

//       if (error) {
//         setFetchError("could not fetch the existing gigs");
//         console.log(error);
//       }
//       if (data) {
//         setGigs(data);
//         setFetchError(null);
//         console.log(data);
//       }
//     };

//     fetchGigs();
//   }, []);

//   const columns = [
//     {
//       name: "Title",
//       selector: (row) => row.title,
//       sortable: true,
//     },
//     {
//       name: "Price",
//       selector: (row) => row.price,
//       sortable: true,
//     },
//     {
//       name: "Skills required",
//       selector: (row) => row.skills.join(", "),
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: (row) => row.description,
//       sortable: true,
//     },
//   ];

//   const [selectedRows, setSelectedRows] = useState([]);
//   const [toggleCleared, setToggleCleared] = useState(false);

//   const handleRowSelected = React.useCallback((state) => {
//     setSelectedRows(state.selectedRows);
//   }, []);

//   const contextActions = React.useMemo(() => {
//     const handleDelete = () => {
//       if (
//         window.confirm(
//           `Are you sure you want to delete:\r ${selectedRows.map(
//             (r) => r.title
//           )}?`
//         )
//       ) {
//         setToggleCleared(!toggleCleared);
//         setGigs(_.differenceBy(gigs, selectedRows, "title"));
//       }
//     };

//     return (
//       <button
//         key="delete"
//         onClick={handleDelete}
//         className=" py-1 px-5 border-2 rounded-lg bg-red-500 text-white hover:bg-red-600 text-lg"
//         icon
//       >
//         Delete
//       </button>
//     );
//   }, [gigs, selectedRows, toggleCleared]);

//   return (
//     <div className="flex justify-center">
//       <div className="w-11/12 bg-slate-100 my-10">
//         {fetchError && <div>{fetchError}</div>}
//         {gigs ? (
//           <DataTable
//             title="Your Gigs"
//             columns={columns}
//             data={gigs}
//             selectableRows
//             contextActions={contextActions}
//             onSelectedRowsChange={handleRowSelected}
//             clearSelectedRows={toggleCleared}
//             pagination
//           />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClientGigs;
