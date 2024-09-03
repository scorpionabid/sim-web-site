// Top 10 chart creation using Chart.js
const ctx = document.getElementById('top10-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Müəllim', 'Məktəb', 'Şagird', 'Direktor', 'Müavin'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top - 10'
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const genderFilter = document.getElementById('genderFilter');
    const departmentFilter = document.getElementById('departmentFilter');
    const statusFilter = document.getElementById('statusFilter');
    const officeFilter = document.getElementById('officeFilter');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    const filters = [genderFilter, departmentFilter, statusFilter, officeFilter];

    filters.forEach(filter => {
        filter.addEventListener('change', filterTable);
    });

    function filterTable() {
        const genderValue = genderFilter.value;
        const departmentValue = departmentFilter.value;
        const statusValue = statusFilter.value;
        const officeValue = officeFilter.value;

        for (let i = 0; i < employeeTable.rows.length; i++) {
            const row = employeeTable.rows[i];
            const gender = row.cells[1].textContent;
            const department = row.cells[2].textContent;
            const status = row.cells[3].textContent;
            const office = row.cells[4].textContent;

            const isGenderMatch = genderValue === '' || gender === genderValue;
            const isDepartmentMatch = departmentValue === '' || department === departmentValue;
            const isStatusMatch = statusValue === '' || status === statusValue;
            const isOfficeMatch = officeValue === '' || office === officeValue;

            if (isGenderMatch && isDepartmentMatch && isStatusMatch && isOfficeMatch) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    }
});