import React from "react";


const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};
export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader && (
        <>
          {textSecondCell === null ? (
            <th style={headerStyle}  data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th style={headerStyle}  data-testid="course-table-header">{textFirstCell}</th>
              <th style={headerStyle}  data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td style={rowStyle} data-testid="course-table-body">{textFirstCell}</td>
          <td style={rowStyle} data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
