//static data
let salesData = [
    {"Category":"category1", "Product":"product1", "Mark":'mark1', "monthly_sales":[100, 200, 50, 150]},
    {"Category":"category1", "Product":"product1", "Mark":"mark2", "monthly_sales":[100, 125, 115, 98]},
    {"Category":"category1", "Product":"product2", "Mark":"mark1", "monthly_sales":[130, 140, 150, 160]},
    {"Category":"category1", "Product":"product2", "Mark":"mark2", "monthly_sales":[134, 164, 98, 100]},

    {"Category":"category2", "Product":"product1", "Mark":"mark1", "monthly_sales":[89, 140, 90, 50]},
    {"Category":"category2", "Product":"product1", "Mark":"mark2", "monthly_sales":[123, 146, 80, 70]},
    {"Category":"category2", "Product":"product2", "Mark":"mark1", "monthly_sales":[90, 56, 145, 99]},
    {"Category":"category2", "Product":"product2", "Mark":"mark2", "monthly_sales":[109, 120, 70, 140]},
];



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Sales By Month for:',
            data: salesData[0].monthly_sales,
            backgroundColor: 'rgba(124, 181, 235, 0.9)',
            borderColor: 'rgba(124, 181, 235, 1)',
            borderWidth: 1
            
        }]
    },
    options: {
        scales: {
            x: {
                grid:{
                    display: false
                },
                title:{
                    display:true,
                    text: 'Months'
                }
            },
            y: {
                beginAtZero: true,
                title:{
                    display:true,
                    text: "Sales"
                }
            },
            
        }
    },
});




//function to update chart data on triggering of dropdown change event
function updateChart()
{
    //dropdown elements
    let category = document.getElementById("category");
    let product = document.getElementById("product");
    let mark = document.getElementById("mark");

    //dropdown values
    let categoryValue = category.value;
    let productValue = product.value;
    let markValue = mark.value;

    
    //new array to be replaced
    let new_stat = [];
    for(let i=0; i<salesData.length; i++)
    {
        //record contains individual records from salesData
        let record = salesData[i];
        if(record.Category == categoryValue && record.Product==productValue && record.Mark==markValue)
        {
            new_stat = record.monthly_sales;
            break;
        }
    }

    //replacing with new data and updating bar chart
    myChart.data.datasets[0].data = new_stat;
    myChart.update();
}