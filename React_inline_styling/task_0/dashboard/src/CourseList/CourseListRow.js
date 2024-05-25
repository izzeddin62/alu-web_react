import React from "react";

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
            <th style={{ backgroundColor: "#deb5b545"}}  data-testid="course-table-header" colSpan="2">{textFirstCell}</th>
          ) : (
            <>
              <th style={{ backgroundColor: "#deb5b545"}}  data-testid="course-table-header">{textFirstCell}</th>
              <th style={{ backgroundColor: "#deb5b545"}}  data-testid="course-table-header">{textSecondCell}</th>
            </>
          )}
        </>
      )}
      {!isHeader && (
        <>
          <td style={{ backgroundColor: "#f5f5f5ab"}} data-testid="course-table-body">{textFirstCell}</td>
          <td style={{ backgroundColor: "#f5f5f5ab"}} data-testid="course-table-body">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
