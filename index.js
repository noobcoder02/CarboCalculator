let sortDirectionArr = [
    {columnName: 'visits', sortDirection: false},
    {columnName: 'totalEmmision', sortDirection: false},
    {columnName: 'avgEmmision', sortDirection: false},
];
let userData= [
    { domainName: "google.com", visits: 0, totalEmmision: 0, avgEmmision: 0},
    { name: "Xyz", age: 50 },
    { name: "abc", age: 20 },
    { name: "bja", age: 30 },
];

console.log(userData);
loadTableData(userData);

function loadTableData(userData){

    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let user of userData){

        dataHtml += `<tr><td>${user.domainName}</td> <td>${user.avgEmmision}</td> <td>${user.visits}</td> <td>${user.totalEmmision}</td></tr>`; 
    
    }
    console.log(dataHtml);

    tableBody.innerHTML = dataHtml;

}

function sortColumn(columnName){

    let sortDirection;

    for(let column of sortDirectionArr){

        if(column['columnName'] == columnName){

            sortDirection = !(column['sortDirection']);
            column['sortDirection'] = sortDirection;

        }

    }
    console.log(sortDirection);

    sort(sortDirection, columnName);
    console.log(userData);
    loadTableData(userData);
    

}

function sort(sortDirection, columnName){

    userData.sort((u1, u2) => {
        return sortDirection ? u1[columnName] - u2[columnName] : u2[columnName] - u1[columnName]
    });

}