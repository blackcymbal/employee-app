import {
  BasicInfoSchemaType,
  SkillInfoSchemaType,
} from "@/components/employee/AddEmployeeSchema";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EmployeeInfoType = { id: number | undefined } & BasicInfoSchemaType &
  SkillInfoSchemaType;

const initialState: EmployeeInfoType = {
  id: undefined,
  firstName: "",
  lastName: "",
  birthday: new Date(1950, 0, 1),
  salary: undefined,
  gender: "Male",
  phone: "",
  skillName: "",
  experienceYears: undefined,
  skillLevel: "Beginner",
};

export const employeeInfoSlice = createSlice({
  name: "employeeInfo",
  initialState,
  reducers: {
    changeBasicInfo: (state, action: PayloadAction<BasicInfoSchemaType>) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    changeSkillsInfo: (state, action: PayloadAction<SkillInfoSchemaType>) => {
      return { ...state, ...action.payload };
    },
    changeAllInfo: (state, action: PayloadAction<EmployeeInfoType>) => {
      return { ...state, ...action.payload };
    },
    resetAllInfo: () => {
      return {
        id: undefined,
        firstName: "",
        lastName: "",
        birthday: new Date(1950, 0, 1),
        salary: undefined,
        gender: "Male",
        phone: "",
        skillName: "",
        experienceYears: undefined,
        skillLevel: "Beginner",
      };
    },
  },
  extraReducers: (builder) => {},
});

export const {
  changeBasicInfo,
  changeSkillsInfo,
  changeAllInfo,
  resetAllInfo,
} = employeeInfoSlice.actions;

export const employeeInfo = (state: RootState) => state.employeeInfo;

export default employeeInfoSlice.reducer;
