import React from "react";

export default function EntriesInfo({ pageIndex, pageSize, page, rows }) {
  let entriesInfoText = "";
  if (rows && rows.length > 0) {
    let totalEntries = rows.length;
    let entriesCountFrom = pageIndex * pageSize + 1;
    let entriesCountTo = entriesCountFrom + page.length - 1;
    entriesInfoText = `showing ${entriesCountFrom} to ${entriesCountTo} of ${totalEntries} entries`;
  } else entriesInfoText = "No entries";

  return <span className="entries-info">{entriesInfoText}</span>;
}
