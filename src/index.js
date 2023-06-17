import './style.css';

// Get DOM
const listElement = document.createElement('div');
listElement.classList = 'dynamic-container';
const listContainer = document.querySelector('.list');

const task = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
  {
    description: 'task3',
    completed: false,
    index: 4,
  },
  {
    description: 'task4',
    completed: false,
    index: 3,
  },
];

function iterateTasks() {
  const sortedTasks = task.sort((a, b) => a.index - b.index);
  sortedTasks.forEach((item) => {
    listElement.innerHTML
        += `
        <div class="list-properties">
            <span class="left-items">
                <input type="checkbox">
                <p>${item.description}</p>
            </span>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <hr>
        `;
  });

  listContainer.appendChild(listElement);
}
iterateTasks();
