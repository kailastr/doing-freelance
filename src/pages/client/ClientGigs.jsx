import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";
import supabase from "../../config/supabaseConfig";

const ClientGigs = () => {
  const [data, setData] = useState([]);
  const Email = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const { data, error } = await supabase
          .from("DF-CreatedGig")
          .select("*")
          .eq("Email", Email);

        if (error) {
          throw error;
        }

        if (data) {
          console.log(data);
          setData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchGigs();
  }, [Email]);

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
            (r) => r.title
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
          data={data}
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
