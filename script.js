function loadData() {
  return fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Use your JSON data here
    return data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

function displaySummary(){
  loadData()
    .then((data) => {
      if (!data || data.length === 0) {
        document.getElementById("summary-items").innerHTML = "No data available.";
        return;
      }
      let summaryItems = "";
      data.forEach(item => {
        summaryItems += `<li class="summary-item">
                            <div class="item-category">
                              <img src="${item.icon}"/>
                              <span>${item.category}</span> 
                            </div>
                            <div class="item-score-wrapper">
                              <span class="item-score">${item.score}</span> 
                              <span class="item-max">/ 100</span> 
                            </div>
                          </li>`;
    });
    document.getElementById("summary-items").innerHTML = summaryItems;
  });
}

displaySummary();