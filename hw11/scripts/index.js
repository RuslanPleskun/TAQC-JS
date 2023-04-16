// Task 1
function makeVote() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', './voteDate.json', true);
  ajaxRequest.onreadystatechange = () => {
    if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
      if(ajaxRequest.status !== 200) {
        alert(`Error ${ajaxRequest.status}: ${ajaxRequest.statusText}`);
      } else {
        document.querySelector('.vote').innerHTML = `${JSON.parse(ajaxRequest.responseText).message} ${new Date()}`;
      }
    }
  };
  ajaxRequest.send();
}

// Task 2
function getaAuthors() {
  const ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open('GET', './books.json', true);
  ajaxRequest.onreadystatechange = () => {
    if (ajaxRequest.readyState === XMLHttpRequest.DONE) {
      if(ajaxRequest.status !== 200) {
        alert(`Error ${ajaxRequest.status}: ${ajaxRequest.statusText}`);
      } else {
        const btn = document.querySelector('.authors');
	const lst = document.createElement('ul');
	lst.className = 'authors-list';
	const values = JSON.parse(ajaxRequest.responseText);
	for (const value of values) {
		const listItem = document.createElement('li');
		listItem.textContent = value.author;
		lst.appendChild(listItem);
	}
	btn.parentNode.replaceChild(lst, btn);
      }
    }
  };
  ajaxRequest.send();
}
