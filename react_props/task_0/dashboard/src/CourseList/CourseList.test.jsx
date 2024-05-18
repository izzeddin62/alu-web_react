import React from "react";
import CourseList from "./CourseList";
import { render, screen } from "@testing-library/react";


test("renders CourseList component", () => {
    render(<CourseList />);
    
    expect(screen.getAllByTestId("course-table-header")).toHaveLength(4);
    expect(screen.getAllByTestId("course-table-body")).toHaveLength(6);
});