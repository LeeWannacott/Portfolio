/* 
table-sort-js
Lee Wannacott 2020
*/
function tableSortJs() {
    console.log("hello world");
    const columnData = [];
    const dictOfColumnIndexAndTableRow = {};
    console.log("dom loaded");
    for (let sortableTable of document.getElementsByTagName("table")) {
        if (sortableTable.className === "table-sort") {
            console.log("table-sort");
            if (!sortableTable.getElementsByTagName("thead")) {
                console.log("<thead> Tag does not exist in table");
            } else if (!sortableTable.getElementsByTagName("tbody")) {
                console.log("<tbody> Tag does not exist in table");
            } else {
                const tableHead = sortableTable.querySelector("thead");
                const tableBody = sortableTable.querySelector("tbody");
                const tableHeadHeaders = tableHead.querySelectorAll("th");

                for (let [columnIndex, th] of tableHeadHeaders.entries(
                    "table"
                )) {
                    console.log("th");
                    let timesClickedColumn = 0;
                    th.addEventListener("click", function () {
                        timesClickedColumn += 1;
                        console.log("clicked");
                        function getTableDataOnClick() {
                            const tableRows = tableBody.querySelectorAll("tr");
                            for (let [i, tr] of tableRows.entries()) {
                                if (
                                    tr.querySelectorAll("td").item(columnIndex)
                                        .innerHTML !== ""
                                ) {
                                    columnData.push(
                                        tr
                                            .querySelectorAll("td")
                                            .item(columnIndex).innerHTML +
                                            "#" +
                                            i
                                    );
                                    dictOfColumnIndexAndTableRow[
                                        tr
                                            .querySelectorAll("td")
                                            .item(columnIndex).innerHTML +
                                            "#" +
                                            i
                                    ] = tr.innerHTML;
                                } else {
                                    // Fill in blank table cells with a value(0), so they can be sorted.
                                    columnData.push("0#" + i);
                                    dictOfColumnIndexAndTableRow["0#" + i] =
                                        tr.innerHTML;
                                }
                            }

                            function naturalSortAescending(a, b) {
                                return a.localeCompare(
                                    b,
                                    navigator.languages[0] ||
                                        navigator.language,
                                    { numeric: true, ignorePunctuation: true }
                                );
                            }
                            function naturalSortDescending(a, b) {
                                return naturalSortAescending(b, a);
                            }
                            // Sort naturally; default aescending unless th is using 'order-by-desc' as className.
                            console.log(columnData[0]);
                            // if (columnData[0].search(/[^A-Za-z0-9\s\-]/))

                            if (typeof columnData[0] !== "undefined") {
                                console.log(typeof columnData);
                                console.log("test1");
                                if (
                                    th.className === "order-by-desc" &&
                                    timesClickedColumn === 1
                                ) {
                                    columnData.sort(naturalSortDescending, {
                                        numeric: true,
                                        ignorePunctuation: true,
                                    });
                                } else if (
                                    th.className === "order-by-desc" &&
                                    timesClickedColumn === 2
                                ) {
                                    columnData.sort(naturalSortAescending, {
                                        numeric: true,
                                        ignorePunctuation: true,
                                    });
                                    timesClickedColumn = 0;
                                } else if (timesClickedColumn === 1) {
                                    columnData.sort(naturalSortAescending);
                                } else if (timesClickedColumn === 2) {
                                    columnData.sort(naturalSortDescending);
                                    timesClickedColumn = 0;
                                }
                            }
                        }
                        getTableDataOnClick();
                        function sortingFunction() {
                            const tableRows = tableBody.querySelectorAll("tr");
                            for (let [i, tr] of tableRows.entries()) {
                                tr.innerHTML =
                                    dictOfColumnIndexAndTableRow[columnData[i]];
                            }
                            columnData.length = 0;
                        }
                        sortingFunction();
                    });
                }
            }
        }
    }
}

if (
    document.readyState === "loading" ||
    document.readyState === "interactive"
) {
    document.addEventListener("DOMContentLoaded", function (e) {
        console.log("1");
        tableSortJs();
    });
} else if (document.readyState === "complete") {
    console.log("2");
    tableSortJs();
}
