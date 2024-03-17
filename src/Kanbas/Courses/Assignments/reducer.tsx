import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

// Intital State
const initialState = {
  assignments: assignments,
  assignment: { id: "", title: "Propulsion Assignment", course: "RS101",
    module:"Multiple Modules", points:"100 pts", DueDate:"Sep 18 at 11:59pm" },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  // Possible actions on our reducer
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload },
          ...state.assignments,
      ];
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          // console.log('Replacing with ',assignment._id, action.payload)
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;