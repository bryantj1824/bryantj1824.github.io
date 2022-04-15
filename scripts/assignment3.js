let labels = [
  'Pre-K',
  '0K',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
];

let data = {
  labels: labels,
  datasets: [{
    label: 'Elementary School 01M015 Attendance in December 2017 (Grades Pre-K through 5th grade)',
    backgroundColor: ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e"], 
    data: [422, 253, 480, 503, 373, 458, 388],
  }]
};


let bar_chart = new Chart( document.getElementById('bar-chart'), {
  type: 'bar',
  data: data,
  options: {}
});

let doughnut_chart = new Chart( document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: data,
  options: {}
} );